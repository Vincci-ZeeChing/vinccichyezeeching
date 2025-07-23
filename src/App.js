import {useState} from 'react'
import { BrowserRouter as Router } from 'react-router-dom';

import Homepage from './pages/Homepage'
import About from "./pages/About";
import Services from "./pages/Services";
import Skill from "./pages/Skill";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";


function App() {
  const [route, setRoute] = useState()

  const navigateTo = (path) => {
    setRoute(path);
  }

  return (
    <Router>
      <div>
        <Navbar navigateTo={navigateTo} />
        {route === '/' && <Homepage navigateTo={navigateTo} />}
        {route === '/about' && <About />}
        {route === '/skill' && <Skill />}
        {route === '/services' && <Services />}
        {route === '/contact' && <Contact />}
      </div>
    </Router>
  );
}

export default App;
