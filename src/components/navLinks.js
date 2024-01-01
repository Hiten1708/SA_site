import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./navLinks.css"

const NavLinks = ({ prePage, nextPage }) => {
  const history = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='navLinks-component'>
      <div className='navLink-left'>
        {prePage ? <Link to={prePage}>Previous Page</Link> : <span style={{ color: '#f8f9fa' }}>Previous Page</span>}
      </div>
      <div className='navLink-center'>
        <Link onClick={history(-1)}>Back</Link>
        <button onClick={scrollToTop}>Top</button>
        <Link to="/">⌂ Home</Link>
      </div>
      <div className='navLink-right'>
        {nextPage ? <Link to={nextPage}>Next Page</Link> : <span style={{ color: '#f8f9fa' }}>Next Page</span>}
      </div>
    </div>
  );
};

export default NavLinks;
