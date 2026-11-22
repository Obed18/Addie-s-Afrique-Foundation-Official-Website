import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const menuVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const sidebarVariants = {
  hidden: { x: "100%" },
  visible: { x: 0, transition: { type: "tween", duration: 0.4 } },
  exit: { x: "100%", transition: { type: "tween", duration: 0.3 } },
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // "ventures" | "about" | null

  const venturesRef = useRef(null);
  const aboutRef = useRef(null);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        openDropdown === "ventures" &&
        venturesRef.current &&
        !venturesRef.current.contains(e.target)
      ) {
        setOpenDropdown(null);
      }
      if (
        openDropdown === "about" &&
        aboutRef.current &&
        !aboutRef.current.contains(e.target)
      ) {
        setOpenDropdown(null);
      }
      if (
        menuOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openDropdown, menuOpen]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <motion.nav
        className={`navbar ${scrolled ? "scrolled" : ""}`}
        initial="hidden"
        animate="visible"
        variants={menuVariants}
      >
        <div className="nav-left">
          <div className="nav-img">
            <img src="/aaf-logo.png" alt="Addie's Afrique Foundation" />
          </div>
        </div>
        <ul className="nav-links">
          <li>
            <a href="/home">Home</a>
          </li>
          <li
            className={`dropdown ${openDropdown === "about" ? "open" : ""}`}
            ref={aboutRef}
          >
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setOpenDropdown((prev) => (prev === "about" ? null : "about"));
              }}
            >
              About <ChevronDown size={14} />
            </a>
            <div className="dropdown-menu">
              <Link to="/about">
                Who we are?
              </Link>
              <Link to="/programs">
                Programs
              </Link>
              <Link to="/team">
                Team
              </Link>
            </div>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>

          <li>
            <Link to="/gallery">
              Gallery
            </Link>
          </li>
          <li>
            <Link to="/partnership">
              Partner
            </Link>
          </li>
          <li>
            <Link to="/volunteer">
              Volunteer
            </Link>
          </li>

          <li>
            <Link to="/faqs">
              FAQs
            </Link>
          </li>
        </ul>
        <Link to="/donate" className="donate-link">
          <button className="donate-btn">
            Donate Now <FaRegHeart />
          </button>
        </Link>
        {menuOpen ? (
          <X className="mobile-menu-icon" onClick={toggleMenu} />
        ) : (
          <Menu className="mobile-menu-icon" onClick={toggleMenu} />
        )}
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="sidebar-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="mobile-sidebar open"
              variants={sidebarVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              ref={sidebarRef}
            >
              <X className="sidebar-close-icon" onClick={toggleMenu} />
              <ul>
                <li>
                  <Link to="/">
                    Home
                  </Link>
                </li>
                <li className="dropdown">
                  <span>
                    About <ChevronDown size={14} />
                  </span>
                  <div className="dropdown-menu">
                    <Link to="/about">
                      Who we are?
                    </Link>
                    <Link to="/programs">
                      Programs
                    </Link>
                    <Link to="/team">
                      Team
                    </Link>
                  </div>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/gallery">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link to="/partnership">
                    Partners
                  </Link>
                </li>
                <li>
                  <Link to="/volunteer">
                    Volunteer
                  </Link>
                </li>
                <li>
                  <Link to="/faqs">
                    FAQs
                  </Link>
                </li>
              </ul>
              <Link to="/donate" className="side-donate-link">
                <button className="donate-btn">
                  Donate Now <FaRegHeart />
                </button>
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
