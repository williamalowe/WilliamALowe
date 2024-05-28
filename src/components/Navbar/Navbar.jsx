import './Navbar.css';
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav id="nav">
      <NavLink to={'/'}>
        <div id="logo">WL</div>
      </NavLink>
      <div className="nav-link-container">
        <NavLink to={'/about'}>About
          <div className="underline"></div>
        </NavLink>
        <NavLink to={'/projects'}>Projects
          <div className="underline"></div>
        </NavLink>
        <NavLink to={'/experience'}>Experience
          <div className="underline"></div>
        </NavLink>
        <NavLink to={'/contact'}>Contact
          <div className="underline"></div>
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar
