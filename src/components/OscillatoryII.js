import React from 'react';
import Latex from 'react-latex';
import './OscillatoryII.css'
import 'katex/dist/katex.min.css';
import NavLinks from './navLinks';

const OscillatoryII = () => {
  
    return (
      <div className="OscillatoryII-container">
  
        <center><h1>Oscillatory Solitons</h1></center>
        <hr/><h2>Sasa-Satsuma-mKdV Equation <Latex>{"$$ u_t + 12|u|(|u|u)_x + u_{xxx} = 0 $$"}</Latex></h2><hr/>
        
        
        <hr/><h2>One-Soliton</h2><hr/>
        <center>
          <p>
            <img src={require('./Gifs/Oscillatory2/ss-one-soliton-anim.gif')} alt=''>
            </img>
        </p>
        </center>
        <center>
          <p>
            <img src={require('./Gifs/Oscillatory2/ss-one-soliton-anim-phase.gif')} alt=''>
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
            <img src={require('./Gifs/Oscillatory2/ss-right-anim.gif')} alt=''>
            </img>
        </p>
        </center>
        <center>
          <p>
            <img src={require('./Gifs/Oscillatory2/ss-right-anim-phase.gif')} alt=''>
            </img>
        </p>
        </center>
        <center><h3>
        Head-On
        </h3></center>
        <center>
          <p>
            <img src={require('./Gifs/Oscillatory2/ss-head-on-anim.gif')} alt=''>
            </img>
        </p>
        </center>
        <center>
          <p>
            <img src={require('./Gifs/Oscillatory2/ss-head-on-anim-phase.gif')} alt=''>
            </img>
        </p>
        </center>
       
        <center><h3>
        Left-Overtake
        </h3></center>
        <center>
          <p>
            <img src={require('./Gifs/Oscillatory2/ss-left-anim.gif')} alt=''>
            </img>
        </p>
        </center>
        <center>
          <p>
            <img src={require('./Gifs/Oscillatory2/ss-left-anim-phase.gif')} alt=''>
            </img>
        </p>
        </center>
        <NavLinks prePage="/OscillatoryI" nextPage="/BreatherI" prePageName='Oscillatory Solitons I' nextPageName='Breather Solitons I' />
      </div>
    );
  };
  
  export default OscillatoryII;
  