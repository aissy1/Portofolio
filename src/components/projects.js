import "./project.css";
import internshipTime from "../assets/project/internshipTime.png";
import sekai from "../assets/project/Sekai.png";
import sportcenter from "../assets/project/Sportcenter.png";
import LostFireboy from "../assets/project/The Lost Fireboy.png";

const Myprojects = () => {
  return (
    <div className="container_wrapp">
      <div className="container">
        <div className="content_wrapper">
          <h2 style={{ color: "#00bfff" }}>Internship.Time</h2>
          <div className="wrapper">
            <img src={internshipTime} alt="Internship>Time" />
          </div>
          <h2 style={{ color: "#00bfff" }}>Sekai</h2>
          <div className="wrapper">
            <img src={sekai} alt="Sekai" />
          </div>
        </div>
        <div className="content_wrapper">
          <h2 style={{ color: "#00bfff" }}>Sportcenter</h2>
          <div className="wrapper">
            <img src={sportcenter} alt="Cashier Sportcenter" />
          </div>
          <h2 style={{ color: "#00bfff" }}>The Lost Fireboy</h2>
          <div className="wrapper">
            <img src={LostFireboy} alt="The Lost Fireboy" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myprojects;
