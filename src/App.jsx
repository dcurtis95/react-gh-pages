import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
// import Works from "./components/works/Works";
import Aboutme from "./components/aboutme/Aboutme";
import Contact from "./components/contact/Contact";
import "./app.scss"
import React, {useState} from "react";
import Menu from "./components/menu/Menu";

function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  const [eyeClosed, setEyeClosed] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro eyeClosed={eyeClosed} setEyeClosed={setEyeClosed}/>
        <Portfolio eyeClosed={eyeClosed} setEyeClosed={setEyeClosed}/>
        {/* <Works eyeClosed={eyeClosed} setEyeClosed={setEyeClosed}/> */}
        <Aboutme eyeClosed={eyeClosed} setEyeClosed={setEyeClosed}/>
        <Contact eyeClosed={eyeClosed} setEyeClosed={setEyeClosed}/>
      </div>
    </div>
  );
}

export default App;
