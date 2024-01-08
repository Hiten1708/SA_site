import React from 'react';
import Latex from 'react-latex';
import './OscillatoryI.css'
import 'katex/dist/katex.min.css';
import NavLinks from './navLinks';

const OscillatoryI = () => {
  
    return (
      <div className="OscillatoryI-container">
        
        <center><h1>Oscillatory Solitons</h1></center>
        
        <hr/><h2>Hirota-mKdV Equation <Latex>{"$$ u_t + 24|u|^2u_x + u_{xxx} = 0 $$"}</Latex></h2><hr/>
        
        
        <hr/><h2>One-Soliton</h2><hr/>
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

        <hr/><h2>
       Two-Soliton
       </h2><hr/>
        
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
        <NavLinks prePage="/ComplexmKdVII" nextPage="/OscillatoryII" prePageName='Sasa-Satsuma Solitons' nextPageName=' Oscillatory Solitons II' />
      </div>
    );
  };
  
  export default OscillatoryI;
  