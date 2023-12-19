import React, { useEffect, useState } from "react";

function getHorizontalScrollContainerWidthAndScrollPosition() {
  const horizontalScrollContainer = document.getElementById(
    "horizontalScrollContainer"
  );
  const width = horizontalScrollContainer.scrollWidth;
  const scrollPosition = horizontalScrollContainer.scrollLeft / 1.78;
  return { width, scrollPosition };
}

function ProgressBar() {
  const [horizontalScrollContainerWidth, setHorizontalScrollContainerWidth] =
    useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const { width, scrollPosition } =
        getHorizontalScrollContainerWidthAndScrollPosition();
      setHorizontalScrollContainerWidth(width);
      setScrollPosition(scrollPosition);
    }
    //Inisialisasi dan tambahkan event listener untuk scroll horizontal
    handleScroll();
    const horizontalScrollContainer = document.getElementById(
      "horizontalScrollContainer"
    );
    horizontalScrollContainer.addEventListener("scroll", handleScroll);
    //hapus event listener saat komponen tidak lagi digunakan
    return () => {
      horizontalScrollContainer.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="scroll_child"
      style={{ width: `${scrollPosition}px` }}
    ></div>
  );
}

export default ProgressBar;
