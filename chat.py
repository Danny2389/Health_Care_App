import random
import json
import torch
from flask_cors import CORS
from flask import Flask, request, jsonifyimport pandas as pd
import numpy as np
from transformers import AutoModelForCausalLM, AutoTokenizer
from src.AIML.model import NeuralNet
from src.AIML.nltk_utils import bag_of_words, tokenize
import google.generativeai as genai

# Device setup for PyTorch
device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')

# Load data for chatbot intents
data_file = open('./src/AIML/intents.json', encoding='utf-8').read()
intents = json.loads(data_file)

# Load model data
FILE = "./src/AIML/data.pth"
data = torch.load(FILE)

input_size = data["input_size"]
hidden_size = data["hidden_size"]
output_size = data["output_size"]
all_words = data['all_words']
tags = data['tags']
model_state = data["model_state"]

model = NeuralNet(input_size, hidden_size, output_size).to(device)
model.load_state_dict(model_state)
model.eval()

# Load disease model
from src.Data.symptoms import symptom
symptoms = symptom

df = pd.DataFrame(columns=symptoms)
df.loc[0] = [0] * len(symptoms)
disease_model = load_model('./src/AIML/pred_model.h5', compile=False)
disease_model.compile(loss='categorical_crossentropy', optimizer='adam', metrics=['accuracy'])

disease_names = [
    '(vertigo) Paroymsal Positional Vertigo', 'AIDS', 'Acne', 'Alcoholic hepatitis', 'Allergy',
    'Arthritis', 'Bronchial Asthma', 'Cervical spondylosis', 'Chicken pox', 'Chronic cholestasis',
    'Common Cold', 'Dengue', 'Diabetes', 'Dimorphic hemmorhoids(piles)', 'Drug Reaction', 
    'Fungal infection', 'GERD', 'Gastroenteritis', 'Heart attack', 'Hepatitis B', 'Hepatitis C',
    'Hepatitis D', 'Hepatitis E', 'Hypertension', 'Hyperthyroidism', 'Hypoglycemia', 'Hypothyroidism',
    'Impetigo', 'Jaundice', 'Malaria', 'Migraine', 'Osteoarthristis', 'Paralysis (brain hemorrhage)',
    'Peptic ulcer disease', 'Pneumonia', 'Psoriasis', 'Tuberculosis', 'Typhoid', 'Urinary tract infection',
    'Varicose veins', 'hepatitis A'
]

from src.Data.precations import precations
from src.Data.description import desc
from src.Data.medications import meds

desc_dict = desc
precations_dict = precations
meds_dict = meds

# Flask app setup
app = Flask(__name__)
CORS(app)  # Enables CORS for all routes

# Configure Gemini AI
genai.configure(api_key="")

# Function to handle Gemini AI response

# Function to handle chatbot logic
@app.route("/get", methods=["POST"])
def chatbot_response():
    msg = request.form["msg"]
    
    if msg.lower() in ["no", "predict"]:
        array = df.values
        array = np.asarray(array).astype(np.float32)
        predictions = disease_model.predict(array)
        predicted_class = np.argmax(predictions)
        global disease
        disease = disease_names[predicted_class]
        text = f"ML:-You have {disease}.<br>" \
               f"<button>Describe</button> " \
               f"<button>Medications</button> " \
               f"<button>Precautions</button>"
        return text

    if msg.lower() == "describe":
        return desc_dict.get(disease, "ML Description not found 😔")
    
    if msg.lower() == "medications":
        medications = meds_dict.get(disease, "ML Medications not found 😔")
        if medications != "ML Medications not found 😔":
            items = medications.split(',')
            formatted_medications = "<b>ML Medications:</b><br><div class='btn-group-vertical mt-2'>"
            for i, item in enumerate(items):
                formatted_medications += f"<p class='mb-1'>{i + 1}. {item.strip()}</p>"
            formatted_medications += "</div>"
            return formatted_medications
        else:
            return medications
    
    if msg.lower() == "precautions":
        precautions = precations_dict.get(disease, "ML Precautions not found 😔")
        if precautions != "ML Precautions not found 😔":
            items = precautions.split(',')
            formatted_precautions = "<b>ML Precautions:</b><br><div class='btn-group-vertical mt-2'>"
            for i, item in enumerate(items):
                formatted_precautions += f"<p mb-1'>{i + 1}. {item.strip()}</p>"
            formatted_precautions += "</div>"
            return formatted_precautions
        else:
            return precautions
    
    if msg in symptoms:
        df.at[0, msg] = 1
        recd = f"ML:-Symptom recorded.</br>"\
        return recd
    
    # Pass other messages to Gemini AI
    return get_response(msg)

if __name__ == '__main__':
    
    app.run(debug=True)
