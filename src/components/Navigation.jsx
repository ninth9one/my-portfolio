import { NavLink } from 'react-router-dom';
import '../App.css';


function Navigation() {
  return (
    <nav>
      <ul>
        <li><NavLink to="/" className="active">About Me</NavLink></li>
        <li><NavLink to="/portfolio" className="active">Portfolio</NavLink></li>
        <li><NavLink to="/contact" className="active">Contact</NavLink></li>
        <li><NavLink to="/resume" className="active">Resume</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navigation;