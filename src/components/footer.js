import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import logo from "../assets/img/R.png";

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
        window.location.href = "https://www.linkedin.com/in/nama_anda/";
        break;
      case "email":
        window.location.href = "mailto:rafifrais12@gmail.com";
        break;
      default:
        break;
    }
  };
  return (
    <>
      <img className="logo_icon" src={logo} alt="" />
      <h1>Let people know when we're up</h1>
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
        <p>Hancrafted by Me With React JS</p>
      </div>
    </>
  );
};

export default Footer;
