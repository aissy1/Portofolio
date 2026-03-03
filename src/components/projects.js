import Slider from "react-slick";
import { useEffect, useRef, useState } from "react";
import mapProjects from "../data/dataProjects";

import "./project.css";
import "../App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Myprojects = () => {
  const [isVisible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [slidesVisible, setSlidesVisible] = useState(2);
  const [direction, setDirection] = useState(null);
  const sectionRef = useRef(null);

  const getAnimation = (index) => {
    if (!isVisible) {
      return "animate__animated animate__fadeOut";
    }

    if (index >= activeIndex && index < activeIndex + slidesVisible) {
      if (direction === "next") {
        return "animate__animated animate__fadeInRight";
      }

      if (direction === "prev") {
        return "animate__animated animate__fadeInLeft";
      }

      return "animate__animated animate__fadeIn";
    }

    return "";
  };

  const settings = {
    dots: false,
    swipe: false,
    infinite: false,
    lazyload: true,
    speed: 0,
    slidesToShow: 2,
    slidesToScroll: 2,
    swipeToSlide: false,
    beforeChange: (current, next) => {
      setActiveIndex(next);

      if (
        next > current ||
        (current === mapProjects.length - 1 && next === 0)
      ) {
        setDirection("next");
      } else {
        setDirection("prev");
      }
    },
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          swipe: false,
          swipeToSlide: false,
          draggable: false,
        },
      },
    ],
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      },
      { threshold: 0.65 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 992) {
        setSlidesVisible(1);
      } else {
        setSlidesVisible(2);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="container_wrapp">
      <h1>Projects Experience</h1>

      {/* ✅ SLIDER DI SINI */}
      <div className="container" ref={sectionRef}>
        <Slider {...settings} className="project_slider">
          {mapProjects.map((item, index) => (
            <div
              key={index}
              className={`content_wrapper ${getAnimation(index)}
              `}
              style={{ animationDelay: "0.1s" }}
            >
              <div className="wrapper">
                <img src={item.img} alt={item.title} />
              </div>
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Myprojects;
