import React from 'react';
import Latex from 'react-latex';
import './ComplexmKdVII.css'
import 'katex/dist/katex.min.css';
import sasa_satsuma_spacetime_r3_dphi06_merge from './Gifs/Complex2/sasa_satsuma_spacetime_r3_dphi06_merge.gif'
import sasa_satsuma_spacetime_r3_dphi035_bounce from './Gifs/Complex2/sasa_satsuma_spacetime_r3_dphi035_bounce.gif'
import sasa_satsuma_spacetime_r3_dphi070316_critical from './Gifs/Complex2/sasa_satsuma_spacetime_r3_dphi070316_critical.gif'
import sasa_satsuma_spacetime_r3_dphi085_absorb from './Gifs/Complex2/sasa_satsuma_spacetime_r3_dphi085_absorb.gif'
import sasa_satsuma_spacetime_r50_dphi035_merge from './Gifs/Complex2/sasa_satsuma_spacetime_r50_dphi035_merge.gif'
import sasa_satsuma_spacetime_r50_dphi06273_critical from './Gifs/Complex2/sasa_satsuma_spacetime_r50_dphi06273_critical.gif'
import sasa_satsuma_spacetime_r50_dphi085_absorb from './Gifs/Complex2/sasa_satsuma_spacetime_r50_dphi085_absorb.gif'
import NavLinks from './navLinks';


const ComplexmKdVII = () => {
  
    return (
      <div className="CmKdVII-container">

        <center><h1>Sasa-Satsuma Solitons</h1></center>
        
        <hr color='red'/><h2>Sasa-Satsuma-mKdV Equation <Latex>{"$$ u_t + 12|u|(|u|u)_x + u_{xxx} = 0 $$"}</Latex></h2><hr color='red'/>
        <p>
        There are two equivalent forms for the Sasa-Satsuma-mKdV equation:
        </p>
        <p>
        (1) In complex-variable notation, <Latex>{"$$u = u_1 + iu_2$$"}</Latex> satisfies
        </p>
        <center><Latex>{"$$u_t + 6 (u\\bar{u}_x +3 u_x \\bar{u})u + u_{xxx} =0$$"}</Latex></center>
        <p>
        (2) In vector notation, u = (u1, u2) satisfies
        </p>
        <center><Latex>{"$$u_t + 12 ((u \\cdot u) u_x + (u \\cdot u_x) u ) + u_{xxx} =0$$"}</Latex></center>
        <hr/><h2>Travelling Wave Solution</h2><hr/>
        <p>
        Travelling waves are given by the special soliton solution
        </p>
        <center><Latex>{"$$ u(x,t) = \\frac{\\sqrt{c}\\exp(i\\phi)}{2\\cosh(\\sqrt{c}\\xi)} $$"}</Latex></center>
        <p>
        where <Latex>{"$$ c > 0 $$"}</Latex> is the wave speed, <Latex>{"$$ -\\pi < c < \\pi $$"}</Latex> is the phase,
         and <Latex>{"$$ \\xi = x - ct $$"}</Latex> is a moving coordinate.
        </p>
        <center>
          <p>
            <img src={require('./Gifs/Complex2/sasa_satsuma_2d_1_soliton.gif')} alt=''className='image'>
            </img>
        </p>
        </center>
        
        <hr/><h2>Colliding Travelling-Waves Solution</h2><hr/>
        <p>
        Collisions where a fast travelling wave with speed <Latex>{"$$ c_1 $$"}</Latex> and phase <Latex>{"$$ \\phi_1 $$"}</Latex> 
        overtakes a slow travelling wave with speed <Latex>{"$$ c_2 $$"}</Latex> and 
        phase <Latex>{"$$ \\phi_2 $$"}</Latex> are given by the special 2-soliton solution
        </p>
        <center>
            <Latex>
                {"$$u(t,x)= \\frac{ (c_1 - c_2)^2(\\sqrt {\\sigma} /2) \\left(\\sqrt{c}_1 \\exp(i\\phi_1) \\left( \\exp(iv_1 + \\sqrt{c}_2 \\xi_2) + exp(-\\sqrt{c}_2 \\xi_2) \\right) + \\sqrt{c}_2 \\exp(i\\phi_2) \\left( \\exp(iv_2 - \\sqrt{c}_1 \\xi_1) + exp(\\sqrt{c}_1 \\xi_1) \\right)\\right)}{\\left(4\\sqrt{c}_1\\sqrt{c}_2\\cos(\\phi_1-\\phi_2)+(\\sqrt{c}_1-\\sqrt{c}_2)^2\\cosh(\\sqrt{c}_1\\xi_1+\\sqrt{c}_2\\xi_2)+(\\sqrt{c}_1+\\sqrt{c}_2)^2 \\sigma \\cosh(\\sqrt{c}_1\\xi_1-\\sqrt{c}_2\\xi_2)\\right)} $$"}
            </Latex>
        </center>
        <p>
        with
        </p>
        <center>
            <Latex>
                {"$$ \\sigma = \\frac{\\sqrt{ c1 + c2 +2 \\sqrt{c}_1 \\sqrt{c}_2 cos(2(\\phi_1 - \\phi_2))}}{\\sqrt{c}_1 + \\sqrt{c}_2} $$"}
            </Latex>
        </center>
        <p>
        and
        </p>
        <center>
            <Latex>
                {"$$ v_1 = \\arctan\\left(\\frac{\\sqrt{c}_2 \\sin(2(\\phi_1 - \\phi_2))}{ \\sqrt{c}_1 + \\sqrt{c}_2 \\cos(2(\\phi_1 - \\phi_2))}\\right) $$"}
            </Latex>
        </center>
        <center>
            <Latex>
                {"$$ v_2 = \\arctan\\left(\\frac{\\sqrt{c}_1 \\sin(2(\\phi_2 - \\phi_1))}{ \\sqrt{c}_2 + \\sqrt{c}_1 \\cos(2(\\phi_2 - \\phi_1))}\\right) $$"}
            </Latex>
        </center>
        <p>
            where <Latex>{"$$\\xi_1 = x - c_1t$$"}</Latex>, <Latex>{"$$\\xi_2 = x - c_2 t$$"}</Latex> are moving coordinates.
        </p>
        <hr/><h3>
       Overlay of Travelling-Wave Solutions and Corresponding Collision Solution
       </h3><hr/>
        
        <center><h3>
        Sasa-Satsuma merge-split interaction
        </h3></center>
        <center>
          <p>
            <img src={require('./Gifs/Complex2/sasa_satsuma_overlay_r3_dphi06_merge.gif')} alt=''className='image'>
            </img>
        </p>
        </center>
        <center><p>ratio of fast to slow wave speeds is <Latex>{"$$ \\frac{c_1}{c_2} = 3$$"}</Latex></p></center>
        <center><p>difference in phases is <Latex>{"$$ |\\phi_1 - \\phi_2| = 0.6\\pi$$"}</Latex></p></center>
        <center><p>
        <p>(Click <a href={sasa_satsuma_spacetime_r3_dphi06_merge} target="_blank" rel="noopener noreferrer">here</a> to see the space time portrait)</p>
        </p></center>
        <br/>
        <center><h3>
        Sasa-Satsuma bounce-exchange interaction 
        </h3></center>
        <center>
          <p>
            <img src={require('./Gifs/Complex2/sasa_satsuma_overlay_r3_dphi035_bounce.gif')} alt=''className='image'>
            </img>
        </p>
        </center>
        <center><p>ratio of fast to slow wave speeds is <Latex>{"$$ \\frac{c_1}{c_2} = 3$$"}</Latex></p></center>
        <center><p>difference in phases is <Latex>{"$$ |\\phi_1 - \\phi_2| = 0.35\\pi$$"}</Latex></p></center>
        <center><p>
        <p>(Click <a href={sasa_satsuma_spacetime_r3_dphi035_bounce} target="_blank" rel="noopener noreferrer">here</a> to see the space time portrait)</p>
        </p></center>
        <br/>
        <center><h3>
        Sasa-Satsuma critical-phase interaction 
        </h3></center>
        <center>
          <p>
            <img src={require('./Gifs/Complex2/sasa_satsuma_overlay_r3_dphi070316_critical.gif')} alt=''className='image'>
            </img>
        </p>
        </center>
        <center><p>ratio of fast to slow wave speeds is <Latex>{"$$ \\frac{c_1}{c_2} = 3$$"}</Latex></p></center>
        <center><p>difference in phases is <Latex>{"$$ |\\phi_1 - \\phi_2| = 0.70316\\pi$$"}</Latex></p></center>
        <center><p>
        <p>(Click <a href={sasa_satsuma_spacetime_r3_dphi070316_critical} target="_blank" rel="noopener noreferrer">here</a> to see the space time portrait)</p>
        </p></center>
        <br/>
        <center><h3>
        Sasa-Satsuma absorb-emit interaction 
        </h3></center>
        <center>
          <p>
            <img src={require('./Gifs/Complex2/sasa_satsuma_overlay_r3_dphi085_absorb.gif')} alt=''className='image'>
            </img>
        </p>
        </center>
        <center><p>ratio of fast to slow wave speeds is <Latex>{"$$ \\frac{c_1}{c_2} = 3$$"}</Latex></p></center>
        <center><p>difference in phases is <Latex>{"$$ |\\phi_1 - \\phi_2| = 0.85\\pi$$"}</Latex></p></center>
        <center><p>
        <p>(Click <a href={sasa_satsuma_spacetime_r3_dphi085_absorb} target="_blank" rel="noopener noreferrer">here</a> to see the space time portrait)</p>
        </p></center>
        <br/>
        <center><h3>
        Sasa-Satsuma merge-split interaction
        </h3></center>
        <center>
          <p>
            <img src={require('./Gifs/Complex2/sasa_satsuma_overlay_r50_dphi035_merge.gif')} alt=''className='image'>
            </img>
        </p>
        </center>
        <center><p>ratio of fast to slow wave speeds is <Latex>{"$$ \\frac{c_1}{c_2} = 50$$"}</Latex></p></center>
        <center><p>difference in phases is <Latex>{"$$ |\\phi_1 - \\phi_2| = 0.35\\pi$$"}</Latex></p></center>
        <center><p>
        <p>(Click <a href={sasa_satsuma_spacetime_r50_dphi035_merge} target="_blank" rel="noopener noreferrer">here</a> to see the space time portrait)</p>
        </p></center>
        <br/>
        <center><h3>
        Sasa-Satsuma critical-phase interaction
        </h3></center>
        <center>
          <p>
            <img src={require('./Gifs/Complex2/sasa_satsuma_overlay_r50_dphi06273_critical.gif')} alt=''className='image'>
            </img>
        </p>
        </center>
        <center><p>ratio of fast to slow wave speeds is <Latex>{"$$ \\frac{c_1}{c_2} = 50$$"}</Latex></p></center>
        <center><p>difference in phases is <Latex>{"$$ |\\phi_1 - \\phi_2| = 0.6273\\pi$$"}</Latex></p></center>
        <center><p>
        <p>(Click <a href={sasa_satsuma_spacetime_r50_dphi06273_critical} target="_blank" rel="noopener noreferrer">here</a> to see the space time portrait)</p>
        </p></center>
        <br/>
        <center><h3>
        Sasa-Satsuma absorb-emit interaction
        </h3></center>
        <center>
          <p>
            <img src={require('./Gifs/Complex2/sasa_satsuma_overlay_r50_dphi085_absorb.gif')} alt=''className='image'>
            </img>
        </p>
        </center>
        <center><p>ratio of fast to slow wave speeds is <Latex>{"$$ \\frac{c_1}{c_2} = 50$$"}</Latex></p></center>
        <center><p>difference in phases is <Latex>{"$$ |\\phi_1 - \\phi_2| = 0.85\\pi$$"}</Latex></p></center>
        <center><p>
        <p>(Click <a href={sasa_satsuma_spacetime_r50_dphi085_absorb} target="_blank" rel="noopener noreferrer">here</a> to see the space time portrait)</p>
        </p></center>
        <NavLinks prePage="/ComplexmKdVI" nextPage="/OscillatoryI" prePageName='Hirota Solitons' nextPageName=' Oscillatory Solitons I'/>
      </div>
    );
  };
  
  export default ComplexmKdVII;
  