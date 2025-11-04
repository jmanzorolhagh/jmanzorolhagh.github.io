import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Works from "./components/works/Works";
import Skills from "./components/skills/Skills"; // 1. IMPORTED
import Contact from "./components/contact/Contact";
import "./App.scss";
import {useState} from "react";
import Menu from "./components/menu/Menu";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="app">
      <Topbar open = {open} setOpen={setOpen}/>
      <Menu open = {open} setOpen={setOpen}/>
      <div className="sections">
        <Intro/>
        <Works/>
        <Skills/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;