import './Home.css'
import Nav from '../Nav/Nav';
import img from '../Nav/hojas.svg';
import Delivery from '../Delivery/Delivery';
import Carta from '../Carta/Carta';
import Ubicacion from '../Ubicacion/Ubicacion';

function Home() {
  return <div >
    <Nav />
    <div className='img-mock-container'>
      <img className='img-mock' src={img} alt="img-app"></img>
      <img className='img-mock' src={img} alt="img-app"></img>
      <img className='img-mock' src={img} alt="img-app"></img>
      <img className='img-mock' src={img} alt="img-app"></img>
    </div>
    <Delivery />
    <Carta />
    <Ubicacion />
  </div>;
}

export default Home;