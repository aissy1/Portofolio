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
        <ul>
          <li className="cta">
            <a className="hover-underline-animation" href="#App">
              RXFIFRAIS.
            </a>
          </li>
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
        {/* <div className="animate_scroll"></div> */}
      </nav>
      <div className="home">
        <Scroll />
        <div className="home_desk">
          <h1 className="animate__animated animate__fadeIn">Hi,</h1>
          <h1 className="animate__animated animate__fadeIn ">
            I'm <span style={{ color: "#00bfff" }}>Rais</span>,
          </h1>
          <h1 className="animate__animated animate__fadeIn">
            <span style={{ color: "#00bfff" }}>Website</span> & {""}
            <span style={{ color: "#8739f9" }}>Software </span>
            <span style={{ color: "#f0f0f0" }}>Developer</span>
          </h1>
          <h3 className="animate__animated animate__fadeIn">
            Front End Developer // .NET Developer
          </h3>
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
