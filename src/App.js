import './App.css';
import Nav from './Components/Nav/Nav';
import img from './Components/Nav/uwu.png';
import ParallaxContent from './Components/Parallax/Parallax';
import Delivery from './Components/Delivery/Delivery';

function App() {
  return (
    <div className="App">
      <Nav />
      <Delivery />
      <ParallaxContent />

      <img className='img-mock' src={img} alt="img-app"></img>
      
    </div>
  );
}

export default App;
