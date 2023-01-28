import React, { useState, useEffect } from "react";
import image from "./delivery-uwu.png"
import "./Delivery.css"
import hojas from "../../Assets/rain.svg"

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
    top: "84vh",
    left: 0,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    transform: `translateY(${scrollY * 0.3}px)`,
  };

  return <div style={contentStyle}>
    <div className="contenedor-hojas">
      <a href="https://api.whatsapp.com/send/?phone=%2B5492612121551&text&type=phone_number&app_absent=0">
        <img className="img-Delivery" src={image} alt="img-Delivery" />
      </a>
      <img className="hojas" src={hojas} alt="asdsa"></img>
    </div>
  </div>;
}

export default Delivery;