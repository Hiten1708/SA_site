// HomePage.js

import React from 'react';
import './home.css'; // Import the corresponding CSS file for styling
import Latex from 'react-latex';
import 'katex/dist/katex.min.css';

const HomePage = () => {

  const equation = '$$u_t + uu_x +u_{xxx} = 0$$';

  return (
    <div className="home-container">

      <center><h1>Solitons & Nonlinear Wave Equations</h1></center>
      <h2>Introduction</h2>
      <p>
        Solitons are stable nonlinear travelling waves that retain their shape and speed in interactions. 
        First discovered empirically in the 1800's from observations of waves made by canal boats, 
        solitons nowadays appear in numerous interesting applications and physical phenomena such as: 
        tsunamis, optical fiber signals, plasmas, atmospheric waves, vortex filaments, superconductivity, 
        and gravitational fields with cylindrical symmetry.
      </p>
      <p>
        A basic example of a soliton equation is the nonlinear PDE which was first written down by 
        Korteweg & de Vries in 1895 as a model of shallow water waves. Some of its remarkable and 
        beautiful features include:
      </p>
      <>
        <center><Latex>{equation}</Latex></center>
      </>
      <ul>
        <li>Infinitely many symmetries and conservation laws, starting with x-translations and mass conservation.</li>
        <li>Exactly solvable by a nonlinear analog of Fourier transforms.</li>
        <li>Determinant formula for generating multi-soliton solutions.</li>
        <li>Nonlinear superposition principle, matrix and operator commutator formulations, 
          Hamiltonian structures and Poisson brackets, zero curvature connections in differential geometry, and much more.</li>
      </ul>

      <h2>Sections</h2>

      <ul>
          <li><a href="http://localhost:3000/non-linear-wave-equation">Nonlinear Wave Equations</a></li>
          <li><a href="http://localhost:3000/Interactions">Interactions of Nonlinear Dispersive Waves</a></li>
          <li><a href="http://localhost:3000/Properties">Properties and Types of Solitons</a></li>
          <li><a href="http://localhost:3000/KdVsolitons">KdV Solitons</a></li>
          <li><a href="http://localhost:3000/mKdVsolitons">mKdV Solitons</a></li>
          <li><a href="http://localhost:3000/ComplexmKdVI">Complex mKdV Solitons I (Hirota equation)</a></li>
          <li><a href="http://localhost:3000/ComplexmKdVII">Complex mKdV Solitons II (Sasa-Satsuma equation)</a></li>
          <li><a href="http://localhost:3000/OscillatoryI">Oscillatory Solitons I (Hirota equation)</a></li>
          <li><a href="http://localhost:3000/OscillatoryII">Oscillatory Solitons II (Sasa-Satsuma equation)</a></li>
          <li><a href="http://localhost:3000/BreatherI">Breather Solitons I (Hirota equation)</a></li>
          <li><a href="http://localhost:3000/BreatherII">Breather Solitons II (Sasa-Satsuma equation)</a></li>
          <li><a href="http://localhost:3000/VectorI">Vector-mKdV Solitons I</a></li>
          <li><a href="http://localhost:3000/VectorII">Vector-mKdV Solitons II</a></li>
      </ul>
    </div>
  );
};

export default HomePage;
