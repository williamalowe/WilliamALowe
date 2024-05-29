import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav id="nav">
      <NavLink to={"/"}>
        <motion.div
          id="logo"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          WL
        </motion.div>
      </NavLink>
      <div className="nav-link-container">
        <NavLink to={"/about"}>
          &lt;About&gt;
          <div className="underline"></div>
        </NavLink>
        <NavLink to={"/projects"}>
          &lt;Projects&gt;
          <div className="underline"></div>
        </NavLink>
        <NavLink to={"/experience"}>
          &lt;Experience&gt;
          <div className="underline"></div>
        </NavLink>
        <NavLink to={"/contact"}>
          &lt;Contact&gt;
          <div className="underline"></div>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
