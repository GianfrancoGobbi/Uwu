import './App.css';
import Nav from './Components/Nav/Nav';
import img from './Components/Nav/uwu.png'

function App() {
  return (
    <div className="App">
      <Nav />
      <img className='img-mock' src={img} alt="img-app"></img>
    </div>
  );
}

export default App;
