import './App.css';
import Nav from './Components/Nav/Nav';
import img from './Components/Nav/hojas.svg';
import ParallaxContent from './Components/Parallax/Parallax';
import Delivery from './Components/Delivery/Delivery';
import Carta from './Components/Carta/Carta';
// import cartapdf from './Components/Carta/carta.pdf'

function App() {
  return (
    <div className="App">
      <Nav />
      <div className='img-mock-container'>
        <img className='img-mock' src={img} alt="img-app"></img>
        <img className='img-mock' src={img} alt="img-app"></img>
      </div>
      <Delivery />
      <Carta/>
      {/* <iframe src={cartapdf} width="100%" height="500px"></iframe> */}
      <ParallaxContent />
   


    </div >
  );
}

export default App;
