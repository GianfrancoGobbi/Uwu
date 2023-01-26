import './App.css';
import { Route } from "react-router-dom";
import Cartapdf from './Components/Carta-pdf/Carta-pdf';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route path="/carta" component={Cartapdf} />
    </div >
  )
}

export default App;
