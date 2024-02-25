
import {Routes, Route} from 'react-router-dom';
import Register from "./pages/Register";
import Movies from "./pages/movies";
import Showcase from "./pages/showcase";
import Info from "./pages/info";
import './index.css';

const App = () => {
  return ( 
    <main>
  <Routes>
    <Route path ="/" element ={<Register/>} />
    <Route path ="/Register" element ={<Register/>} />
    <Route path ="/info" element ={<Info/>} />
    <Route path ="/showcase" element ={<Showcase/>} />
    <Route path ="/movies" element ={<Movies/>} />
    <Route path ="." element ={<h1>404 Route not found</h1>} />
  </Routes> 
  
  </main>

  
  );
  }

export default App;
