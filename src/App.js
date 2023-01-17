import './App.css';
import Nav from './Components/Nav/Nav';
import img from './Components/Nav/uwu.png';
import ParallaxContent from './Components/Parallax/Parallax';

function App() {
  return (
    <div className="App">
      <Nav />
      <ParallaxContent />
      <img className='img-mock' src={img} alt="img-app"></img>
      
    </div>
  );
}

export default App;
