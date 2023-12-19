import React from "react";
import { DiHtml5 } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { FaBootstrap } from "react-icons/fa6";
import { SiPhp } from "react-icons/si";
import { DiJsBadge } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { FaFigma } from "react-icons/fa";
import "./carousel.css";

const Competencies = () => {
  return (
    <div className="skills_wrapper">
      <div className="content">
        <DiHtml5 className="icons" style={{ color: "#FF6D00" }} />
      </div>
      <div className="content">
        <DiCss3 className="icons" style={{ color: "cyan" }} />
      </div>
      <div className="content">
        <FaBootstrap className="icons" style={{ color: "#8739f9" }} />
      </div>
      <div className="content">
        <SiPhp className="icons" style={{ color: "#DCD5F2" }} />
      </div>
      <div className="content">
        <DiJsBadge className="icons" style={{ color: "yellow" }} />
      </div>
      <div className="content">
        <DiReact className="icons_react" style={{ color: "cyan" }} />
      </div>
      <div className="content">
        <FaFigma
          className="icons"
          style={{ height: "max-content", color: "#fff" }}
        />
      </div>
    </div>
  );
};
export default Competencies;
