import pdf from "./carta.pdf"
import "./Carta-pdf.css"
import React, { useState, useEffect } from "react";

function Cartapdf() {

  // eslint-disable-next-line
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
    top: "0px",
    zIndex: 500,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
  };

  return <>
    <div style={contentStyle}>
      <iframe src={pdf} width="100%" height="100%" title="carta"></iframe>
    </div>
  </>
}

export default Cartapdf;