import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import "./navLinks.css"

const NavLinks = ({ prePage, nextPage, prePageName, nextPageName }) => {
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavLinkClick = () => {
    scrollToTop();
    // If you need additional logic when a NavLink is clicked, add here
  };

  return (
    <div className='navLinks-component'>
      <div className='navLink-left'>
        {prePage && (
          <span>
            Previous: <NavLink to={prePage} activeClassName="active" onClick={handleNavLinkClick}>{prePageName}</NavLink>
          </span>
        )}
      </div>
      <div className='navLink-center'>
        {/* Update: Removed incorrect usage of navigate */}
        <NavLink to="#" onClick={() => navigate(-1)} activeClassName="active">Back</NavLink>
        |<button onClick={scrollToTop} >↑ Top</button>
        |<NavLink to="/" onClick={handleNavLinkClick} activeClassName="active">⌂ Home</NavLink>
      </div>
      <div className='navLink-right'>
        {nextPage && (
          <span>
            Next: <NavLink to={nextPage} activeClassName="active" onClick={handleNavLinkClick}>{nextPageName}</NavLink>
          </span>
        )}
      </div>
    </div>
  );
};

export default NavLinks;