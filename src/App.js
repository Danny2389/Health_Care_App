import React from "react";
import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header";
import { Home } from "./Components/HomeContainer/Home";
import { Menu } from "./Components/Menu";
import { BrowserRouter} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ChatBot from "./Components/ChatBot/ChatBot";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Menu />
        <Home />
        <Footer />
        <ChatBot />
      </div>
    </BrowserRouter>
  );
}

export default App;
