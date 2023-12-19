import React, { useState, useEffect } from "react";

const Scroll = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollFunction = () => {
    if (
      document.body.scrollTop > 500 ||
      document.documentElement.scrollTop > 500
    ) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  useEffect(() => {
    window.onscroll = () => scrollFunction();
  }, []);

  return (
    <button
      onClick={scrollToTop}
      id="back-to-top-btn"
      className={isVisible ? "visible" : ""}
    >
      Back to Top
    </button>
  );
};

export default Scroll;
