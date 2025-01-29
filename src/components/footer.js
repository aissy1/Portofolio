import React, { useState, useEffect } from "react";
import { FaWhatsapp, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import logo from "../assets/img/R.png";
import "../App.css";

const TypingEffect = ({ text, speed = 100, delay = 2000 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else {
      const resetTimeout = setTimeout(() => {
        setDisplayedText("");
        setIndex(0);
        setIsTyping(false);
      }, delay);

      return () => clearTimeout(resetTimeout);
    }
  }, [index, text, speed, delay]);

  const renderTextWithLineBreaks = () => {
    return displayedText.split("\n").map((line, i) => (
      <React.Fragment key={i}>
        {line}
        {i < displayedText.split("\n").length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <span>
      {renderTextWithLineBreaks()}
      {isTyping && <span className="cursor">I</span>}
    </span>
  );
};

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
    <div className="footer">
      <img className="logo_icon" src={logo} alt="Logo" />
      <h1>
        <TypingEffect
          text={`We mature through pain, not age`}
          speed={180}
          delay={5000}
        />
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
