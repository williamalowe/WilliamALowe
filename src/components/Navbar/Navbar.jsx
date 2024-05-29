import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [viewPage, setViewPage] = useState(" ... ");

  const mobNavMenu = {
    hidden: {
      opacity: 0,
      y: -16,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: -5,
    },
  };
  const mobNavLink = {
    hidden: {
      opacity: 0,
      y: -16,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      y: -5,
    },
  };

  return (
    <nav id="nav">
      <NavLink
        to={"/"}
        onClick={() => setViewPage(" ... ") + setShowNav(false)}
      >
        <motion.div
          id="logo"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          &#123; WL &#125;
        </motion.div>
      </NavLink>
      <div className="nav_link_container">
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
      <div className="mobile">
        <button onClick={() => setShowNav(!showNav)}>&lt;{viewPage}&gt;</button>
        <AnimatePresence>
          {showNav && (
            <motion.div
              className="mobile_links"
              variants={mobNavMenu}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.div variants={mobNavLink}>
                <NavLink
                  to={"/about"}
                  onClick={() => setShowNav(false) + setViewPage("About")}
                >
                  &lt;About&gt;
                </NavLink>
              </motion.div>
              <motion.div variants={mobNavLink}>
                <NavLink
                  to={"/projects"}
                  onClick={() => setShowNav(false) + setViewPage("Projects")}
                >
                  &lt;Projects&gt;
                </NavLink>
              </motion.div>
              <motion.div variants={mobNavLink}>
                <NavLink
                  to={"/experience"}
                  onClick={() => setShowNav(false) + setViewPage("Experience")}
                >
                  &lt;Experience&gt;
                </NavLink>
              </motion.div>
              <motion.div variants={mobNavLink}>
                <NavLink
                  to={"/contact"}
                  onClick={() => setShowNav(false) + setViewPage("Contact")}
                >
                  &lt;Contact&gt;
                </NavLink>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
