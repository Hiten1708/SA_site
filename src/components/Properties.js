import React from 'react';
import './Properties.css'; // Import the corresponding CSS file for styling
import 'katex/dist/katex.min.css';

const Properties = () => {
  return (
    <div className="Properties-container">

      <center><h1>What is a Soliton?</h1></center>
      <p>
      For most nonlinear wave equations, localized travelling waves of different 
      speeds exhibit complicated nonlinear interactions in which the wave profiles 
      change shape and speed or acquire tails. If instead the interaction preserves 
      the shape and speed of the initial wave profiles, such waves are called solitons.
      </p>
      <h2>
      Some Mathematical Features of Solitons
      </h2>
      <p>
      All soliton equations including the KdV and MKdV equations exhibit some remarkable mathematical features:
      </p>
      <ul>
        <li>Can be exactly solved by a nonlinear analog of Fourier transforms</li>
        <li>Obey some form of nonlinear superposition principle</li>
        <li>Have two (or more) compatible Hamiltonian structures</li>
        <li>Possess an infinite number of conservation laws and symmetries</li>
        <li>Admit a determinant formula for multi-soliton solutions</li>
      </ul>
    </div>
  );
};

export default Properties;
