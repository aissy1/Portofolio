import { FaWhatsapp, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import logo from "../assets/img/R.png";
import "../App.css";

const Footer = () => {
  const openContact = (contactType) => {
    switch (contactType) {
      case "whatsapp":
        window.location.href = "https://wa.me/6282334465235";
        break;
      case "instagram":
        window.location.href = "https://www.instagram.com/rxfifrais/";
        break;
      case "linkedin":
        window.location.href =
          "https://www.linkedin.com/in/muhammad-rafif-5b9010254/";
        break;
      case "email":
        window.location.href = "mailto:rafifrais12@gmail.com";
        break;
      default:
        break;
    }
  };

  return (
    <div className="footer">
      <h1 style={{ fontStyle: "italic" }}>RXFIFRAIS.</h1>
      <h1>
        A Soul too <span style={{ color: "#7fffd4" }}> calm </span> to{" "}
        <span style={{ fontStyle: "italic" }}>SCREAM</span>,
        <br /> too{" "}
        <span style={{ color: "#1b1c1e", textShadow: "1px 1px 5px #303030" }}>
          dark{" "}
        </span>
        to shine
      </h1>
      <div className="btn_nav">
        <button className="btn" onClick={() => openContact("whatsapp")}>
          <FaWhatsapp className="icon" />
        </button>
        <button className="btn" onClick={() => openContact("instagram")}>
          <FaInstagram className="icon" />
        </button>
        <button className="btn" onClick={() => openContact("linkedin")}>
          <FaLinkedinIn className="icon" />
        </button>
        <button className="btn" onClick={() => openContact("email")}>
          <MdOutlineMail className="icon" />
        </button>
      </div>
      <div>
        <p>Build With React</p>
      </div>
    </div>
  );
};

export default Footer;
