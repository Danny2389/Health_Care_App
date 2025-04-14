import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "font-awesome/css/font-awesome.min.css";
import styles from "./ChatBot.module.css";

const ChatBot = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! How can I help you today?" },
  ]);
  const [input, setInput] = useState("");

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  // Function to send a message
  const sendMessage = async (message) => {
    if (!message.trim()) return;

    const userMessage = { sender: "user", text: message };
    setMessages((prev) => [...prev, userMessage]);

    try {
      const response = await fetch("http://127.0.0.1:5000/get", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `msg=${encodeURIComponent(message)}`,
      });

      const botReply = await response.text();
      setMessages((prev) => [...prev, { sender: "bot", text: botReply }]);
    } catch (error) {
      console.error("Error fetching response:", error);
      setMessages((prev) => [...prev, { sender: "bot", text: "Error connecting to server. Try again." }]);
    }
  };

  const handleForm = (event) => {
    event.preventDefault();
    sendMessage(input);
    setInput("");
  };

  // ✅ Expose `sendMessage` globally so HTML buttons can use it
  useEffect(() => {
    window.sendMessage = sendMessage;
  }, []);

  return (
    <div>
      <div className={styles.chatIcon} onClick={toggleChat}>
      <i class="fa-solid fa-user-doctor fa-2x"></i>
      </div>

      <div className={`${styles.chatWindow} ${isChatOpen ? styles.active : ""}`} id="chatWindow">
        <div className="card">
          <div className={styles.cardHeader}>
            <img src="https://tse3.mm.bing.net/th?id=OIP.9FiyyosVP_HRin9lCM7nOwHaHa&pid=Api&P=0&h=220" alt="Bot" />
            CNAME AI - Medical Assistant
          </div>
          <div className={styles.msgCardBody}>
            {messages.map((msg, index) => (
              <div key={index} className={msg.sender === "user" ? styles.msgContainerSend : styles.msgContainer}>
                <span dangerouslySetInnerHTML={{ __html: msg.text }}></span>
              </div>
            ))}
          </div>
          <div className={styles.cardFooter}>
            <form className="d-flex" onSubmit={handleForm}>
              <input type="text" className={styles.typeMsg} placeholder="Type your message..." value={input} onChange={(e) => setInput(e.target.value)} required />
              <button type="submit" className={styles.sendBtn}>
                <i className="fa-solid fa-share"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
