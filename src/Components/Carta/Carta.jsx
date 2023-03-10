import React, { useState, useEffect } from "react";
import image from "./carta.png";
import "./Carta.css";
import { NavLink } from 'react-router-dom';
import hojas from "../../Assets/rain.svg"

function Carta() {
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
    top: "165vh",
    left: 0,
    width: "100%",
    transform: `translateY(${scrollY * 0.3}px)`,
    display: "flex",
    justifyContent: "center",
  };

  return <>
    <NavLink to="/carta" >
      <div style={contentStyle}>
        <div className="contenedor-hojas">
          <img className="img-Carta" src={image} alt="img-Carta" />
          <img className="hojas" src={hojas} alt="asdsa"></img>
        </div>
      </div>
    </NavLink >
  </>
}

export default Carta;


