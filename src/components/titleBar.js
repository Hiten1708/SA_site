import React from 'react';
import './titleBar.css';
import BU_logo from './BU_logo.png';
import { Link } from 'react-router-dom';

const TitleBar = () => {
  return (
    <Link to="/" className="title-bar">
      <div className="left-content">DEPARTMENT OF MATHEMATICS</div>
      <div className="right-content">
        <img src={BU_logo} alt="Brock Logo" />
      </div>
    </Link>
  );
};

export default TitleBar;
