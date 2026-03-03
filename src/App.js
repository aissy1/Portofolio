import Navbar from "./components/navbar";
import profile from "./assets/img/profile1.png";
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
        <Navbar />
      </nav>
      <div className="home">
        <Scroll />
        <div className="zero_page">
          <div className="home_desk">
            <h1 className="animate__animated animate__fadeIn animate__slow">
              Hi, I'm <span style={{ color: "#00bfff" }}>Rais</span>
            </h1>
            <h1 className="animate__animated animate__fadeIn animate__slow">
              <span style={{ color: "#8739f9" }}>Website</span> {""}
              <span style={{ color: "#f0f0f0" }}>Developer</span>
            </h1>
            <h3 className="animate__animated animate__fadeIn animate__slow">
              Developer with a passion for creating beautiful and functional
              websites.
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
                alt="rafifrais"
              />
            </div>
            <div className="profile_bottom">
              <PiGameControllerDuotone className="PiGameControllerDuotone" />
            </div>
          </div>
        </div>
        <div className="stack_container">
          <h1 className="stack_head">Tech Stack & Tools</h1>
          <div className="stack_wrapp">
            <Competencies />
          </div>
        </div>
      </div>
      <div className="projects" id="Projects">
        <Myprojects />
      </div>
      <div id="footer" className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
