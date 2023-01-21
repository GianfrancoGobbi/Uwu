import './Home.css'
import Nav from '../Nav/Nav';
import img from '../Nav/hojas.svg';
import ParallaxContent from '../Parallax/Parallax';
import Delivery from '../Delivery/Delivery';
import Carta from '../Carta/Carta';

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
    <ParallaxContent />
  </div>;
}

export default Home;