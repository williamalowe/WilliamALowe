import './Navbar.css';
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav id="nav">
      <NavLink>
        <div id="logo">WL</div>
      </NavLink>
      <div className="nav-link-container">
        <NavLink>About</NavLink>
        <NavLink>Projects</NavLink>
        <NavLink>Experience</NavLink>
        <NavLink>Contact</NavLink>
      </div>
    </nav>
  )
}

export default Navbar
