import React from 'react';
import Latex from 'react-latex';
import './OscillatoryI.css'
import 'katex/dist/katex.min.css';
import NavLinks from './navLinks';

const OscillatoryI = () => {
  
    return (
      <div className="OscillatoryI-container">
        
        <center><h1>Oscillatory Solitons</h1></center>
        
        <hr color='red'/><h2>Hirota-mKdV Equation <Latex>{"$$ u_t + 24|u|^2u_x + u_{xxx} = 0 $$"}</Latex></h2><hr color= 'red'/>
        
        <hr/><h2>One-Soliton</h2><hr/>
        <center>
          <p>
            <img src={require('./Gifs/Oscillatory1/hirota-one-soliton-anim.gif')} alt=''className='image'>
            </img>
        </p>
        </center>
        <center>
          <p>
            <img src={require('./Gifs/Oscillatory1/hirota-one-soliton-anim-phase.gif')} alt=''className='image'>
            </img>
        </p>
        </center>

        <hr/><h2>
       Two-Soliton
       </h2><hr/>
        <br/>
       <hr/><h3>
        Right-Overtake
        </h3><hr/>
        <center>
          <p>
            <img src={require('./Gifs/Oscillatory1/hirota-right-anim.gif')} alt=''className='image'>
            </img>
        </p>
        </center>
        <center>
          <p>
            <img src={require('./Gifs/Oscillatory1/hirota-right-anim-phase.gif')} alt='' className='image'>
            </img>
        </p>
        </center>
        <hr/><h3>
        Head-On
        </h3><hr/>
        <center>
          <p>
            <img src={require('./Gifs/Oscillatory1/hirota-head-on-anim.gif')} alt=''className='image'>
            </img>
        </p>
        </center>
        <center>
          <p>
            <img src={require('./Gifs/Oscillatory1/hirota-head-on-anim-phase.gif')} alt=''className='image'>
            </img>
        </p>
        </center>
       
        <hr/><h3>
        Left-Overtake
        </h3><hr/>
        <center>
          <p>
            <img src={require('./Gifs/Oscillatory1/hirota-left-anim.gif')} alt=''className='image'>
            </img>
        </p>
        </center>
        <center>
          <p>
            <img src={require('./Gifs/Oscillatory1/hirota-left-anim-phase.gif')} alt=''className='image'>
            </img>
        </p>
        </center>
        <NavLinks prePage="/ComplexmKdVII" nextPage="/OscillatoryII" prePageName='Sasa-Satsuma Solitons' nextPageName=' Oscillatory Solitons II' />
      </div>
    );
  };
  
  export default OscillatoryI;
  