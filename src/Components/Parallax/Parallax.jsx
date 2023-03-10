import React, { useState, useEffect } from "react";
import image from "./parallax.svg"
import "./Parallax.css"

function ParallaxContent() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setScrollY(window.scrollY);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const contentStyle = {
    position: "absolute",
    top: "120vh",
    left: 0,
    width: "100%",
    transform: `translateY(${scrollY * 0.4}px)`,
    pointerEvents: "none"
  };

  return <div style={contentStyle}>
    <img className="img-parallax" src={image} alt="img-parallax"/>
  </div>;
}

export default ParallaxContent;