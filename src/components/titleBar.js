// TitleBar.js

import React from 'react';
import './titleBar.css'; // Import the corresponding CSS file
import BU_logo from "./BU_logo.png";

const TitleBar = () => {
  return (
    <div className="title-bar">
      <div className="left-content">DEPARTMENT OF MATHEMATICS</div>
      <div className="right-content">
        <img src={BU_logo} alt="Brock Logo" />
      </div>
    </div>
  );
};

export default TitleBar;
