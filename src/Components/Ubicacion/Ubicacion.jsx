import React, { useState, useEffect } from "react";
import image from "./ubicacion.png"
import "./Ubicacion.css"

function Delivery() {
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
    top: "255vh",
    left: 0,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    transform: `translateY(${scrollY * 0.3}px)`,
  };

  return <div style={contentStyle}>
    <a href="https://goo.gl/maps/1X6YQa13TX7djfYN9">
      <img className="img-ubicacion" src={image} alt="img-ubicacion" />
    </a>
  </div>;
}

export default Delivery;