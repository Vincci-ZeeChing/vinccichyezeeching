import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <div className="navbar">
      <Link className="nav-link" to="/">Home</Link>
      <Link className="nav-link" to="/about">About</Link>
      <Link className="nav-link" to="/skill">Skills</Link>
      <Link className="nav-link" to="/services">Services</Link>
      <Link className="nav-link" to="/contact">Contact</Link>
  </div>
);

export default Navbar;
