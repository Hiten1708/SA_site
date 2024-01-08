import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import "./navLinks.css"

const NavLinks = ({ prePage, nextPage, prePageName, nextPageName }) => {
  const history = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='navLinks-component'>
    <div className='navLink-left'>
      {prePage ? <span>Previous: <NavLink to={prePage} activeClassName="active">{prePageName}</NavLink></span> : <span style={{ color: '#f8f9fa' }}>Previous page: {prePageName}</span>}
    </div>
      <div className='navLink-center'>
        <NavLink onClick={history(-1)} activeClassName="active">Back</NavLink>
        <button onClick={scrollToTop} activeClassName="active">Top</button>
        <NavLink to="/" activeClassName="active">⌂ Home</NavLink>
      </div>
      <div className='navLink-right'>
        {nextPage && <span>Next: <NavLink to={nextPage} activeClassName="active">{nextPageName}</NavLink></span>}
      </div>
    </div>
  );
};

export default NavLinks;
