// ReusableComponent.js

import React from 'react';
import './aniComp.css'; // Import the corresponding CSS file for styling

const AniComp = ({ title, beforeText, afterText, imageComponent }) => {
  return (
    <div className="reusable-component">
      <h2>{title}</h2>
      <p>{beforeText}</p>
      {imageComponent && <div className="image-container">{imageComponent}</div>}
      <p>{afterText}</p>
    </div>
  );
};

export default AniComp;
