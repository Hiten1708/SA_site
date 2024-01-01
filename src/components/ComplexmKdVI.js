import React from 'react';
import Latex from 'react-latex';
import './ComplexmKdVI.css'
import 'katex/dist/katex.min.css';
import NavLinks from './navLinks';

const ComplexmKdVI = () => {
  
    return (
      <div className="CmKdVI-container">
  
        <center><h1>Hirota Solitons</h1></center>
        <h2>Hirota-mKdV Equation <Latex>{"$$ u_t + 24|u|^2u_x + u_{xxx} = 0 $$"}</Latex></h2>
        <p>
        There are two equivalent forms for the Hirota-mKdV equation:
        </p>
        <p>
        (1) In complex-variable notation, <Latex>{"$$u = u_1 + iu_2$$"}</Latex> satisfies
        </p>
        <center><Latex>{"$$u_t + 24 \\bar{u}uu_x + u_{xxx} =0$$"}</Latex></center>
        <p>
        (2) In vector notation, u = (u1, u2) satisfies
        </p>
        <center><Latex>{"$$u_t + 24 (u \\cdot u) u_x + u_{xxx} =0$$"}</Latex></center>
        <h2>Travelling Wave Solution</h2>
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
            <img src={require('./Gifs/Complex1/hirota_2d_1_soliton.gif')} alt=''>
            </img>
        </p>
        </center>
        
        <h3>Colliding Travelling-Waves Solution</h3>
        <p>
        Collisions where a fast travelling wave with speed <Latex>{"$$ c_1 $$"}</Latex> and phase <Latex>{"$$ \\phi_1 $$"}</Latex> 
        overtakes a slow travelling wave with speed <Latex>{"$$ c_2 $$"}</Latex> and 
        phase <Latex>{"$$ \\phi_2 $$"}</Latex> are given by the special 2-soliton solution
        </p>
        <center>
            <Latex>
                {"$$u(x,t) = \\frac{(c_1-c_2)(\\sqrt{c_1}\\exp(i\\phi_1)\\cosh(\\sqrt{c_2}\\xi_2) + c_2\\exp(i\\phi_2)\\sinh(\\sqrt{c_1}\\xi_1))}{4\\sqrt{c_1}\\sqrt{c_2}\\cos(\\phi_1-\\phi_2)+(\\sqrt{c_1}-\\sqrt{c_2})^2cosh(\\sqrt{c_1}\\xi_1 + \\sqrt{c_2}\\xi_2) + (\\sqrt{c_1} + \\sqrt{c_2})^2\\cosh(\\sqrt{c_1}\\xi_1 - \\sqrt{c_2}\\xi_2)}$$"}
            </Latex>
        </center>
        <p>
        where <Latex>{" $$ \\xi_1 = x - c_1 t $$"}</Latex>, <Latex>{"$$ \\xi_2 = x - c_2 t $$"}</Latex> are moving coordinates.
        </p>
       <h3>
       Overlay of Travelling-Wave Solutions and Corresponding Collision Solution
       </h3>
        
        <center><h3>
        Hirota merge-split interaction
        </h3></center>
        <center>
          <p>
            <img src={require('./Gifs/Complex1/hirota_overlay_r28_dphi075_merge.gif')} alt=''>
            </img>
        </p>
        </center>
        <center><p>ratio of fast to slow wave speeds is <Latex>{"$$ \\frac{c_1}{c_2} = 2.8$$"}</Latex></p></center>
        <center><p>difference in phases is <Latex>{"$$ |\\phi_1 - \\phi_2| = 0.75\\pi$$"}</Latex></p></center>
        <center><p>
        <p>(Click <a href="./Gifs/KdVsolitons/spacetime_kdv_3soliton_case3.gif">
        here</a> to see the space time portrait)</p>
        </p></center>
        <center><h3>
        Hirota bounce-exchange interaction 
        </h3></center>
        <center>
          <p>
            <img src={require('./Gifs/Complex1/hirota_overlay_r28_dphi03_bounce.gif')} alt=''>
            </img>
        </p>
        </center>
        <center><p>ratio of fast to slow wave speeds is <Latex>{"$$ \\frac{c_1}{c_2} = 2.8$$"}</Latex></p></center>
        <center><p>difference in phases is <Latex>{"$$ |\\phi_1 - \\phi_2| = 0.3\\pi$$"}</Latex></p></center>
        <center><p>
        <p>(Click <a href="./Gifs/KdVsolitons/spacetime_kdv_3soliton_case3.gif">
        here</a> to see the space time portrait)</p>
        </p></center>
        <center><h3>
        Hirota critical-phase interaction 
        </h3></center>
        <center>
          <p>
            <img src={require('./Gifs/Complex1/hirota_overlay_r28_dphi08689_critical.gif')} alt=''>
            </img>
        </p>
        </center>
        <center><p>ratio of fast to slow wave speeds is <Latex>{"$$ \\frac{c_1}{c_2} = 2.8$$"}</Latex></p></center>
        <center><p>difference in phases is <Latex>{"$$ |\\phi_1 - \\phi_2| = 0.8689\\pi$$"}</Latex></p></center>
        <center><p>
        <p>(Click <a href="./Gifs/KdVsolitons/spacetime_kdv_3soliton_case3.gif">
        here</a> to see the space time portrait)</p>
        </p></center>
        <center><h3>
        Hirota absorb-emit interaction 
        </h3></center>
        <center>
          <p>
            <img src={require('./Gifs/Complex1/hirota_overlay_r28_dphi095_absorb.gif')} alt=''>
            </img>
        </p>
        </center>
        <center><p>ratio of fast to slow wave speeds is <Latex>{"$$ \\frac{c_1}{c_2} = 2.8$$"}</Latex></p></center>
        <center><p>difference in phases is <Latex>{"$$ |\\phi_1 - \\phi_2| = 0.95\\pi$$"}</Latex></p></center>
        <center><p>
        <p>(Click <a href="./Gifs/KdVsolitons/spacetime_kdv_3soliton_case3.gif">
        here</a> to see the space time portrait)</p>
        </p></center>
        <center><h3>
        Hirota merge-split interaction
        </h3></center>
        <center>
          <p>
            <img src={require('./Gifs/Complex1/hirota_overlay_r50_dphi03_merge.gif')} alt=''>
            </img>
        </p>
        </center>
        <center><p>ratio of fast to slow wave speeds is <Latex>{"$$ \\frac{c_1}{c_2} = 50$$"}</Latex></p></center>
        <center><p>difference in phases is <Latex>{"$$ |\\phi_1 - \\phi_2| = 0.3\\pi$$"}</Latex></p></center>
        <center><p>
        <p>(Click <a href="./Gifs/KdVsolitons/spacetime_kdv_3soliton_case3.gif">
        here</a> to see the space time portrait)</p>
        </p></center>
        <center><h3>
        Hirota critical-phase interaction
        </h3></center>
        <center>
          <p>
            <img src={require('./Gifs/Complex1/hirota_overlay_r50_dphi0637_critical.gif')} alt=''>
            </img>
        </p>
        </center>
        <center><p>ratio of fast to slow wave speeds is <Latex>{"$$ \\frac{c_1}{c_2} = 50$$"}</Latex></p></center>
        <center><p>difference in phases is <Latex>{"$$ |\\phi_1 - \\phi_2| = 0.637\\pi$$"}</Latex></p></center>
        <center><p>
        <p>(Click <a href="./Gifs/KdVsolitons/spacetime_kdv_3soliton_case3.gif">
        here</a> to see the space time portrait)</p>
        </p></center>
        <center><h3>
        Hirota absorb-emit interaction
        </h3></center>
        <center>
          <p>
            <img src={require('./Gifs/Complex1/hirota_overlay_r50_dphi075_absorb.gif')} alt=''>
            </img>
        </p>
        </center>
        <center><p>ratio of fast to slow wave speeds is <Latex>{"$$ \\frac{c_1}{c_2} = 50$$"}</Latex></p></center>
        <center><p>difference in phases is <Latex>{"$$ |\\phi_1 - \\phi_2| = 0.75\\pi$$"}</Latex></p></center>
        <center><p>
        <p>(Click <a href="./Gifs/KdVsolitons/spacetime_kdv_3soliton_case3.gif">
        here</a> to see the space time portrait)</p>
        </p></center>
        <NavLinks prePage="/mKdVsolitons" nextPage="/ComplexmKdVII" />
      </div>
    );
  };
  
  export default ComplexmKdVI;
  