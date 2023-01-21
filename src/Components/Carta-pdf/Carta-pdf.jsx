import pdf from "./carta.pdf"
import "./Carta-pdf.css"

function Cartapdf() {
  return <div>
    <iframe src={pdf} width="100%" height="500px" title="carta"></iframe>
  </div>;
}

export default Cartapdf;