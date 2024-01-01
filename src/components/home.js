// HomePage.js

import React from 'react';
import './home.css'; // Import the corresponding CSS file for styling
import Latex from 'react-latex';
import 'katex/dist/katex.min.css';
import { Link } from 'react-router-dom';

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
        <li><Link to="/non-linear-wave-equation" target="_blank" rel="noreferrer">Nonlinear Wave Equations</Link></li>
        <li><Link to="/Interactions" target="_blank" rel="noreferrer">Interactions of Nonlinear Dispersive Waves</Link></li>
        <li><Link to="/Properties" target="_blank" rel="noreferrer">Properties and Types of Solitons</Link></li>
        <li><Link to="/KdVsolitons" target="_blank" rel="noreferrer">KdV Solitons</Link></li>
        <li><Link to="/mKdVsolitons" target="_blank" rel="noreferrer">mKdV Solitons</Link></li>
        <li><Link to="/ComplexmKdVI" target="_blank" rel="noreferrer">Complex mKdV Solitons I (Hirota equation)</Link></li>
        <li><Link to="/ComplexmKdVII" target="_blank" rel="noreferrer">Complex mKdV Solitons II (Sasa-Satsuma equation)</Link></li>
        <li><Link to="/OscillatoryI" target="_blank" rel="noreferrer">Oscillatory Solitons I (Hirota equation)</Link></li>
        <li><Link to="/OscillatoryII" target="_blank" rel="noreferrer">Oscillatory Solitons II (Sasa-Satsuma equation)</Link></li>
        <li><Link to="/BreatherI" target="_blank" rel="noreferrer">Breather Solitons I (Hirota equation)</Link></li>
        <li><Link to="/BreatherII" target="_blank" rel="noreferrer">Breather Solitons II (Sasa-Satsuma equation)</Link></li>
        <li><Link to="/VectorI" target="_blank" rel="noreferrer">Vector-mKdV Solitons I</Link></li>
        <li><Link to="/VectorII" target="_blank" rel="noreferrer">Vector-mKdV Solitons II</Link></li>
    </ul>
    </div>
  );
};

export default HomePage;
