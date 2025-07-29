import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Homepage from './pages/Homepage/Homepage';
import About from './pages/About/About';
import Services from './pages/Services';
import Skill from './pages/Skill';
import Contact from './pages/Contact';
import Navbar from './components/Navbar/Navbar';
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/vinccichyezeeching" element={<LandingPage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
