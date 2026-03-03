import { useState, useEffect, useRef } from "react";
import { DiHtml5, DiCss3, DiJsBadge, DiReact } from "react-icons/di";
import { FaLaravel } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { SiPhp } from "react-icons/si";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";

const techStack = [
  { name: "HTML5", icon: DiHtml5, color: "#FF6D00" },
  { name: "CSS3", icon: DiCss3, color: "cyan" },
  { name: "Bootstrap", icon: FaBootstrap, color: "#8739f9" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "cyan" },
  { name: "PHP", icon: SiPhp, color: "#DCD5F2" },
  { name: "JavaScript", icon: DiJsBadge, color: "yellow" },
  { name: "React", icon: DiReact, color: "cyan" },
  { name: "Laravel", icon: FaLaravel, color: "orange" },
];

const Competencies = () => {
  const [isVisible, setVisible] = useState(false);
  const sectionRef = useRef(null);
  const [startAutoplay, setStartAutoplay] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);

          setTimeout(() => {
            setStartAutoplay(true);
          }, 1000);
        } else {
          setVisible(false);
          setStartAutoplay(false);
        }
      },
      { threshold: 0.6 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    cssEase: "linear",
    swipe: false,
    speed: 3000,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="skills_wrapper" ref={sectionRef}>
      <Slider {...settings}>
        {techStack.map((tech, index) => {
          const IconComponent = tech.icon;
          return (
            <div
              key={index}
              className={`content ${
                isVisible ? "animate__animated animate__fadeIn" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <IconComponent className="iconComponent" color={tech.color} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Competencies;
