import React from 'react';
import Latex from 'react-latex';
import './BreatherII.css'
import 'katex/dist/katex.min.css';
import NavLinks from './navLinks';

const BreatherII = () => {
  
    return (
      <div className="BreatherII-container">
        
        <center><h1>Oscillatory Solitons</h1></center>
        
        <hr color='red'/><h2>Sasa-Satsuma-mKdV Equation <Latex>{"$$ u_t + 12|u|(|u|u)_x + u_{xxx} = 0 $$"}</Latex></h2><hr color='red'/>
        
        <hr/><h2>Breather - Soliton</h2><hr/>
        <br/>
        <hr/><h3>Right-Breather</h3><hr/>
        <br/>
        <center>
          <p>
            <img src={require('./Gifs/Breather2/ss-right-breather-anim.gif')} alt=''className='image'>
            </img>
        </p>
        </center>
        <hr/><h3>Oscillatory-Right-Breather</h3><hr/>
        <center>
          <p>
            <img src={require('./Gifs/Breather2/ss-oscil-right-breather-anim.gif')} alt=''className='image'>
            </img>
        </p>
        </center>

        <hr/><h3>
       Stationary-Breather
       </h3><hr/>
       <center>
          <p>
            <img src={require('./Gifs/Breather2/ss-stationary-breather-anim.gif')} alt=''className='image'>
            </img>
        </p>
        </center>
        
        <hr/><h3>
        Oscillatory-Stationary-Breather
        </h3><hr/>
        <center>
          <p>
            <img src={require('./Gifs/Breather2/ss-oscil-stationary-breather-anim.gif')} alt=''className='image'>
            </img>
        </p>
        </center>
        <hr/><h3>
        Left-Breather
        </h3><hr/>
        <center>
          <p>
            <img src={require('./Gifs/Breather2/ss-left-breather-anim.gif')} alt=''className='image'>
            </img>
        </p>
        </center>
        <hr/><h3>
        Oscillatory-Left-Breather
        </h3><hr/>
        <center>
          <p>
            <img src={require('./Gifs/Breather2/ss-oscil-left-breather-anim.gif')} alt=''className='image'>
            </img>
        </p>
        </center>

        <NavLinks prePage="/BreatherI" nextPage="/VectorI" prePageName='Breather Solitons I' nextPageName='Vector-mKdV Solitons I' />
      </div>
    );
  };
  
  export default BreatherII;
  