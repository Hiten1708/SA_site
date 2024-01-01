import React from 'react';
import Latex from 'react-latex';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import 'katex/dist/katex.min.css';
import './NonLinear.css';

const NonLinear = () => {
    const equation = "$$ u(x,t)= \\left( \\frac{(p+1)(p+2)c}{2} \\right)^{1/p} \\text{sech}^{2/p} \\left(  \\frac{p\\sqrt{c}(x−ct)}{2} \\right)$$"

return (
    <div className='nL-container'>
        <Link to="/" className="back-button top">Back to Home</Link>
        <center><h1>Nonlinear Wave Equations</h1></center>
        <p>There are many different nonlinear wave equations. 
        Some types of equations have solutions that display singularities or gradient blow-ups, 
        while other types of equations have smooth dispersive solutions 
        (decaying in time and space) or, in some cases, stable traveling wave solutions.
        </p>

          <h2>The Convective Wave Equation</h2>
         <p>
             The general form of the convective wave equation is <Latex>{"$$ u_t + c(u)u_x = 0 $$"}</Latex> where <Latex>{"$$ c'(u)$$"}</Latex> 
             is the wave speed given by a function of the wave amplitude u. 
             If the wave speed is a constant (i.e. <Latex>{"$$ c'(u) = 0 $$"}</Latex>), this equation has traveling wave solutions.
             For non-constant wave speeds <Latex>{"$$ c'(u) $$"}</Latex> there are no traveling wave solutions, instead gradient blow-ups occur.
        </p>
        <p>
            The simplest example is <Latex>{"$$ c(u) = u^p $$"}</Latex>
             which depends on a positive integer p, giving a nonlinear convective equation
        </p>
        <center><Latex>{"$$ u_t + u^pu_x = 0 $$"}</Latex></center>
        <p>
            Solutions <Latex>{"$$ u(x,t) $$"}</Latex> describe nonlinear waves whose profile eventually 
            becomes multi-valued (i.e. there is a gradient blow-up).
        </p>
        <center><Latex>{"$$ u(x, 0) = sech^2(x) $$"}</Latex></center>
        <center><p>
            <img src={require('././Gifs/Nl_eq/convective-2-soln.gif')} alt='convective-2-soln.gif'></img>
        </p></center>
        <p>
             Naturally the question arises, how can this wave equation 
             be modified to possess stable traveling wave solutions? 
             Stable traveling waves with localized profiles 
             (having rapid spatial decay) are called solitary waves.
        </p>
        <h2>The Dispersive Wave Equation</h2>
        <p>
            Can dispersion balance nonlinearity? The simplest dispersive wave equation is
        </p>
        <center><Latex>{"$$ u_t +u_{xxx} = 0 $$"}</Latex></center>
        <p>
            Its solutions <Latex>{"$$ u(x, t) $$"}</Latex> have the general form of an integral superposition of 
            oscillatory waves <Latex>{"$$ exp(ik^3t, ikx) $$"}</Latex> with frequency <Latex>{"$$ ω = \\frac{k^3}{2π} $$"}</Latex> and wavelength 
            <Latex>{"$$ λ = \\frac{2π}{k} $$"}</Latex> for arbitrary <Latex>{"$$ k $$"}</Latex>. The amplitude of these oscillatory waves is the 
            Fourier transform of the initial profile <Latex>{"$$ u(x, 0) $$"}</Latex>. Because oscillatory waves 
            of different frequency propagate at different speeds, there are no localized 
            travelling wave solutions. Instead solutions <Latex>{"$$ u(x, t) $$"}</Latex> describe dispersive waves 
            whose profile develops an oscillatory decaying tail.
            </p>
        <center><Latex>{"$$ u(x, 0) = sech^2(x) $$"}</Latex></center>
        <center><p>
            <img src={require('./Gifs/Nl_eq/dispersive-soln.gif')} alt='dispersive-soln.gif'></img>
        </p></center>
        <h2>Nonlinearity and Dispersion</h2>
        <p>
            The physical feature of balancing dispersion against nonlinearity leads to solitary wave solutions. 
            Adding the dispersive term to term <Latex>{"$$ u_{xxx} $$"}</Latex> 
            to the nonlinear convective equation gives the Generalized KdV equation
        </p>

        <center><Latex>{"$$ u_t + u^pu_x + u_{xxx} = 0 $$"}</Latex></center>

        <p>where <Latex>{"$$ p $$"}</Latex> is a positive integer.</p>

        <p>Localized traveling wave solutions (solitary waves) of the GKdV equation have the form</p>

        <center><Latex>{equation}</Latex></center>

        <p>
            with a constant wave speed <Latex>{"$$c > 0$$"}</Latex>. 
         The following plots depict how changing the degree of nonlinearity 
        <Latex>{"$$ (p) $$"}</Latex> affects the wave profile.
        </p>

        <p>
            Waves having the same wave speed have a decrease in wave height as the nonlinearity increases.
        </p>

        <center><p>
            <img src={require('./Gifs/Nl_eq/gKdV-compare-p.gif')} alt='gKdV-compare-p.gif'></img>
        </p></center>
        <p>
            Waves of the same height (but different speeds) have a steeper and narrower profile.
        </p>
        <center><p>
            <img src={require('./Gifs/Nl_eq/gKdV-compare-c.gif')} alt='gKdV-compare-c.gif'></img>
        </p></center>
        <Link to="/" className="back-button bottom">Back to Home</Link>
        </div>
    );
};

export default NonLinear;