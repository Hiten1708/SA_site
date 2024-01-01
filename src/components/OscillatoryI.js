import React from 'react';
import Latex from 'react-latex';
import './OscillatoryI.css'
import 'katex/dist/katex.min.css';

const OscillatoryI = () => {
  
    return (
      <div className="OscillatoryI-container">
  
        <center><h1>Oscillatory Solitons</h1></center>
        <h2>Hirota-mKdV Equation <Latex>{"$$ u_t + 24|u|^2u_x + u_{xxx} = 0 $$"}</Latex></h2>
        
        
        <h3>One-Soliton</h3>
        <center>
          <p>
            <img src={require('./Gifs/Oscillatory1/hirota-one-soliton-anim.gif')} alt=''>
            </img>
        </p>
        </center>
        <center>
          <p>
            <img src={require('./Gifs/Oscillatory1/hirota-one-soliton-anim-phase.gif')} alt=''>
            </img>
        </p>
        </center>

       <h3>
       Two-Soliton
       </h3>
        
        <center><h3>
        Right-Overtake
        </h3></center>
        <center>
          <p>
            <img src={require('./Gifs/Oscillatory1/hirota-right-anim.gif')} alt=''>
            </img>
        </p>
        </center>
        <center>
          <p>
            <img src={require('./Gifs/Oscillatory1/hirota-right-anim-phase.gif')} alt=''>
            </img>
        </p>
        </center>
        <center><h3>
        Head-On
        </h3></center>
        <center>
          <p>
            <img src={require('./Gifs/Oscillatory1/hirota-head-on-anim.gif')} alt=''>
            </img>
        </p>
        </center>
        <center>
          <p>
            <img src={require('./Gifs/Oscillatory1/hirota-head-on-anim-phase.gif')} alt=''>
            </img>
        </p>
        </center>
       
        <center><h3>
        Left-Overtake
        </h3></center>
        <center>
          <p>
            <img src={require('./Gifs/Oscillatory1/hirota-left-anim.gif')} alt=''>
            </img>
        </p>
        </center>
        <center>
          <p>
            <img src={require('./Gifs/Oscillatory1/hirota-left-anim-phase.gif')} alt=''>
            </img>
        </p>
        </center>
      </div>
    );
  };
  
  export default OscillatoryI;
  