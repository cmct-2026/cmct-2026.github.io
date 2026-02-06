import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ({ isMenuOpen, toggleMenu, closeMenu }) => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav style={{
      backgroundColor: 'var(--primary-color)',
      padding: '0',
      width: '100%',
      position: 'relative',
      zIndex: 1000
    }}>
      {/* Mobile Toggle Button (Visible only on mobile) */}
      <div className="navbar-mobile-toggle" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={`navbar-list ${isMenuOpen ? 'active' : ''}`}>
        <li><Link to="/" onClick={closeMenu} className={isActive('/') ? 'active-tab' : ''}>CMCT 2026</Link></li>
        <li><Link to="/call-for-papers" onClick={closeMenu} className={isActive('/call-for-papers') ? 'active-tab' : ''}>Call for Papers</Link></li>
        <li><Link to="/committee" onClick={closeMenu} className={isActive('/committee') ? 'active-tab' : ''}>Committees</Link></li>
        <li><Link to="/important-dates" onClick={closeMenu} className={isActive('/important-dates') ? 'active-tab' : ''}>Important Dates</Link></li>
        {/* <li><Link to="/accepted-papers" onClick={closeMenu}>Accepted Papers</Link></li>
        <li><Link to="/program" onClick={closeMenu}>Program</Link></li>
        <li><Link to="/keynote-speakers" onClick={closeMenu}>Keynote Speakers</Link></li> */}
        <li><Link to="/invited-presentations" onClick={closeMenu} className={isActive('/invited-presentations') ? 'active-tab' : ''}>Invited talks</Link></li>
        <li><Link to="/registration" onClick={closeMenu} className={isActive('/registration') ? 'active-tab' : ''}>Registration</Link></li>
        <li>
          <a
            href="https://nycu-theory-day.github.io/2026-April/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="external-link"
          >
            NYCU<br />Theory Day
          </a>
        </li>
        <li><Link to="/venue" onClick={closeMenu} className={isActive('/venue') ? 'active-tab' : ''}>Venue & Accommodation</Link></li>
        <li><Link to="/help-desk" onClick={closeMenu} className={isActive('/help-desk') ? 'active-tab' : ''}>Help Desk</Link></li>
      </ul>
      <style>{`
        .navbar-mobile-toggle {
            display: none;
            color: white;
            font-size: 1.5rem;
            height: 50px; /* Fixed height for consistency */
            padding: 0;   /* Use flexbox for centering, not padding */
            cursor: pointer;
            width: 100%;
            box-sizing: border-box;
            /* Flexbox for perfect centering */
            justify-content: center;
            align-items: center;
            line-height: 0; /* Remove font baseline offset */
        }
        .navbar-mobile-toggle svg {
            margin: 0 auto; /* Explicitly center SVG */
            display: block; /* Remove inline behavior */
        }
        @media (max-width: 1200px) {
            .navbar-mobile-toggle {
               display: flex; /* Activate flexbox on mobile */
            }
        }
        .navbar-mobile-toggle:hover {
            background-color: var(--secondary-color);
        }

        .navbar-list {
          display: flex;
          justify-content: center;
          background-color: var(--primary-color);
          margin: 0;
          padding: 0;
          list-style: none;
          width: 100%;
          align-items: stretch;
        }
        .navbar-list li {
          flex: 1;
          text-align: center;
          border-right: 1px solid rgba(255,255,255,0.2);
          display: flex;
        }
        .navbar-list li:last-child {
          border-right: none;
        }
        .navbar-list li a {
          color: white;
          text-decoration: none;
          font-size: 0.85rem;
          font-weight: 600;
          padding: 0.75rem 0.25rem;
          text-transform: uppercase;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color 0.2s;
          line-height: 1.2;
          box-sizing: border-box;
        }
        .navbar-list li a.active-tab {
          background-color: var(--secondary-color);
          font-weight: 700;
        }
        .navbar-list li a.external-link {
          /*background-color: #6c757d;*/
          background-color: #348e8e;
        }
        .navbar-list li a.external-link:hover {
          /*background-color: #5a6268;*/
          background-color: var(--secondary-color);
        }
        
        .navbar-list li a:hover {
          background-color: var(--secondary-color);
        }

        /* Responsive Mobile View */
        @media (max-width: 1200px) {
          /* .navbar-mobile-toggle is already handled above */
          .navbar-list {
            /* display: none;  <- Remove this */
            display: flex;     /* Keep layout active but hidden */
            flex-direction: column;
            width: 100%;
            background-color: var(--primary-color);
            position: static;
            box-shadow: none; 
            
            /* Animation properties */
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.4s ease-in-out;
          }
          .navbar-list.active {
            /* display: flex; <- Already flex */
            max-height: 600px; /* Large enough to fit all items */
          }
           .navbar-list li {
            border-right: none;
            border-top: 1px solid rgba(255,255,255,0.1);
            display: block; 
          }
          .navbar-list li a {
            padding: 1rem;
            justify-content: center;
            padding-left: 12px; /* Manually nudge text to the right as requested */
            text-align: center;
            min-height: auto;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
