
import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header";
import { Home } from "./Components/HomeContainer/Home";


import { Menu } from "./Components/Menu";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ChatBot from "./Components/ChatBot/ChatBot";

function App() {
  return (
    <div >
<Header/>
<Menu/>
<Home/>
<ChatBot/>
<Footer/>
    </div>
  );
}

export default App;
