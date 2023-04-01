import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import Cadetlife from './Pages/Cadetlife';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';




  function App() {
    return (
      <div className="App">

      <Router>
      <Navbar/> 

      <Routes>
        <Route path = '/' element={<Home />} />
        <Route path = '/home' element={<Home />} />
        <Route path = '/cadetlife' element={<Cadetlife />} /> 
        <Route path = '/footer' element={<Footer />} />
      </Routes>
      </Router>
        
      </div>
    );
  }

  export default App;
