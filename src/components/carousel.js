import { useState, useEffect, useRef } from "react";
import { DiHtml5, DiCss3, DiJsBadge, DiReact } from "react-icons/di";
import { FaBootstrap } from "react-icons/fa";
import { SiPhp } from "react-icons/si";

const Competencies = () => {
  const [isAnimated, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentRef = sectionRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimate(true);
        } else {
          setAnimate(false);
        }
      },
      { threshold: 0.8 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div className="skills_wrapper" ref={sectionRef}>
      <div className="content">
        <DiHtml5
          className={
            isAnimated
              ? "icons animate__animated animate__zoomIn animate__slow"
              : "icons"
          }
          style={{ display: isAnimated ? "block" : "none", color: "#FF6D00" }}
        />
      </div>
      <div className="content">
        <DiCss3
          className={
            isAnimated
              ? "icons animate__animated animate__zoomIn animate__slow"
              : "icons"
          }
          style={{ display: isAnimated ? "block" : "none", color: "cyan" }}
        />
      </div>
      <div className="content">
        <FaBootstrap
          className={
            isAnimated
              ? "icons animate__animated animate__zoomIn animate__slow"
              : "icons"
          }
          style={{ display: isAnimated ? "block" : "none", color: "#8739f9" }}
        />
      </div>
      <div className="content">
        <SiPhp
          className={
            isAnimated
              ? "icons animate__animated animate__zoomIn animate__slow"
              : "icons"
          }
          style={{ display: isAnimated ? "block" : "none", color: "#DCD5F2" }}
        />
      </div>
      <div className="content">
        <DiJsBadge
          className={
            isAnimated
              ? "icons animate__animated animate__zoomIn animate__slow"
              : "icons"
          }
          style={{ display: isAnimated ? "block" : "none", color: "yellow" }}
        />
      </div>
      <div className="content">
        <DiReact
          className={
            isAnimated
              ? "icons animate__animated animate__zoomIn animate__slow"
              : "icons"
          }
          style={{
            display: isAnimated ? "block" : "none",
            color: "cyan",
          }}
        />
      </div>
    </div>
  );
};

export default Competencies;
