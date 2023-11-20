// HomePage.js

import React from 'react';
import './home.css'; // Import the corresponding CSS file for styling
import Latex from 'react-latex';
import { BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import NonLinear from './NonLinear';

const HomePage = () => {

  const equation = '$$y = x$$';

  return (
    <div className="home-container">

      <center><h1>Solitons & Nonlinear Wave Equations</h1></center>
      <h2>Introduction</h2>
      <p>
        Solitons are stable nonlinear travelling waves that retain their shape and speed in interactions. First discovered empirically in the 1800's from observations of waves made by canal boats, solitons nowadays appear in numerous interesting applications and physical phenomena such as: tsunamis, optical fiber signals, plasmas, atmospheric waves, vortex filaments, superconductivity, and gravitational fields with cylindrical symmetry.
      </p>
      <p>
        A basic example of a soliton equation is the nonlinear PDE which was first written down by Korteweg & de Vries in 1895 as a model of shallow water waves. Some of its remarkable and beautiful features include:
      </p>
      <>
        <Latex>{equation}</Latex>
      </>
      <ul>
        <li>Infinitely many symmetries and conservation laws, starting with x-translations and mass conservation.</li>
        <li>Exactly solvable by a nonlinear analog of Fourier transforms.</li>
        <li>Determinant formula for generating multi-soliton solutions.</li>
        <li>Nonlinear superposition principle, matrix and operator commutator formulations, Hamiltonian structures and Poisson brackets, zero curvature connections in differential geometry, and much more.</li>
      </ul>

      <h2>Sections</h2>



      <BrowserRouter>

        <ul>
            <li><Link to="/non-Linear-wave-equation">Nonlinear Wave Equations</Link></li>
        </ul>

        <div>
          <Routes>
            <Route path="/non-linear-wave-equation" Component={<NonLinear />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default HomePage;
