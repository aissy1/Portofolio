import React from "react";
import profile from "./assets/img/profile (3).png";
import Scroll from "./components/scrollTop";
import Competencies from "./components/carousel";
import Myprojects from "./components/projects";
import Footer from "./components/footer";
import { PiMusicNotesDuotone } from "react-icons/pi";
import { PiGameControllerDuotone } from "react-icons/pi";
import { RiCodeSSlashFill } from "react-icons/ri";
import "./components/carousel.css";
import "./App.css";

function App() {
  const handleClick = () => {
    window.location.href = "#footer";
  };

  return (
    <div id="App" className="App">
      <nav>
        <div className="logo">
          <a href="#App">RXFIFRAIS.</a>
        </div>
        <ul>
          <li className="cta">
            <a className="hover-underline-animation" href="#App">
              HOME
            </a>
          </li>
          <li className="cta">
            <a className="hover-underline-animation" href="#Projects">
              PROJECTS
            </a>
          </li>
          <li className="cta">
            <a className="hover-underline-animation" href="#footer">
              CONTACT
            </a>
          </li>
        </ul>
      </nav>
      <div className="home">
        <Scroll />
        <div className="home_desk">
          <h1 className="animate__animated animate__slideInLeft">
            Hey, you can call me <span style={{ color: "#00bfff" }}>Rais</span>
          </h1>
          <h2 className="animate__animated animate__fadeIn ">
            I am a{" "}
            <span id="jobDesk" style={{ color: "#00bfff" }}>
              Frontend Developer
            </span>
          </h2>
          <p className="desk animate__animated animate__zoomIn">
            I am a Junior Frontend Developer with passion and expertise in
            developing attractive and responsive user interfaces for web
            applications.
          </p>
          <div className="social_wrapper"></div>
          <button className="btn_contact" onClick={handleClick}>
            <p className="text">Contact</p>
          </button>
        </div>
        <div className="profile_wrapper">
          <div className="profile_top">
            <PiMusicNotesDuotone className="PiMusicNotesDuotone" />
          </div>
          <div className="profile_side">
            <RiCodeSSlashFill className="RiCodeSSlashFill" />
          </div>
          <div className="profile_bg">
            <img
              src={profile}
              className="profile animate__animated animate__fadeIn"
              alt=""
            />
          </div>
          <div className="profile_bottom">
            <PiGameControllerDuotone className="PiGameControllerDuotone" />
          </div>
        </div>
      </div>
      <div className="skill_section">
        <h1 className="skill_head">Tech Stack & Tools</h1>
        <div className="skills_wrapp">
          <Competencies />
        </div>
      </div>
      <div className="projects" id="Projects">
        <h1>My Projects</h1>
        <Myprojects />
      </div>
      <div id="footer" className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
