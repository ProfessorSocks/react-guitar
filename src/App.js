import logo from './logo.svg';
import './App.css';
import Banner from './components/Banner';
import { Carousel } from 'bootstrap';
import Example from './components/Carosuel';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import NavbarExample from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavbarExample/>
      <Example/>
    </div>
  );
}

export default App;
