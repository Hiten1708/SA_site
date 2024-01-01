import React from 'react';
import Latex from 'react-latex';
import './BreatherI.css'
import 'katex/dist/katex.min.css';
import NavLinks from './navLinks';

const BreatherI = () => {
  
    return (
      <div className="BreatherI-container">
  
        <center><h1>Oscillatory Solitons</h1></center>
        <h2>Hirota-mKdV Equation <Latex>{"$$ u_t + 24|u|^2u_x + u_{xxx} = 0 $$"}</Latex></h2>
        
        
        <h3>Breather - Soliton</h3>
        <h3>Right-Breather</h3>
        <center>
          <p>
            <img src={require('./Gifs/Breather1/hirota-right-breather-anim.gif')} alt=''>
            </img>
        </p>
        </center>
        <h3>Oscillatory-Right-Breather</h3>
        <center>
          <p>
            <img src={require('./Gifs/Breather1/hirota-oscil-right-breather-anim.gif')} alt=''>
            </img>
        </p>
        </center>

       <h3>
       Stationary-Breather
       </h3>
       <center>
          <p>
            <img src={require('./Gifs/Breather1/hirota-stationary-breather-anim.gif')} alt=''>
            </img>
        </p>
        </center>
        
        <h3>
        Oscillatory-Stationary-Breather
        </h3>
        <center>
          <p>
            <img src={require('./Gifs/Breather1/hirota-oscil-stationary-breather-anim.gif')} alt=''>
            </img>
        </p>
        </center>
        <h3>
        Left-Breather
        </h3>
        <center>
          <p>
            <img src={require('./Gifs/Breather1/hirota-left-breather-anim.gif')} alt=''>
            </img>
        </p>
        </center>
        <h3>
        Oscillatory-Left-Breather
        </h3>
        <center>
          <p>
            <img src={require('./Gifs/Breather1/hirota-oscil-left-breather-anim.gif')} alt=''>
            </img>
        </p>
        </center>
        <NavLinks prePage="/OscillatoryII" nextPage="/BreatherII" />
      </div>
    );
  };
  
  export default BreatherI;
  