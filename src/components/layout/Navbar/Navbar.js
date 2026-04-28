import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'Home',       path: '/'           },
  { label: 'About',      path: '/about'      },
  { label: 'Projects',   path: '/projects'   },
  { label: 'Experience', path: '/experience' },
  { label: 'Contact',    path: '/contact'    },
];

function Navbar() {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location              = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location]);

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="nav-logo">RS</Link>

        <ul className={`nav-links${open ? ' open' : ''}`}>
          {NAV_LINKS.map(({ label, path }) => (
            <li key={path}>
              <Link
                to={path}
                className={`nav-link${location.pathname === path ? ' active' : ''}`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="nav-toggle"
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
