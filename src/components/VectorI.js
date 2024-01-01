import React from 'react';
import Latex from 'react-latex';
import './VectorI.css'
import 'katex/dist/katex.min.css';

const VectorI = () => {
  
    return (
      <div className="VectorI-container">
  
        <center><h1>Vector-MKdV Solitons I</h1></center>
        <h2>Vector MKdV Equation <Latex>{"$$ u_t + 24|u|^2u_x + u_{xxx} = 0 $$"}</Latex></h2>
        <p>
        In vector notation, <Latex>{"$$u = (u_1,...,u_N)$$"}</Latex> is 
        a <Latex>{"$$N$$"}</Latex>-component variable satisfying the vector MKdV equation
        </p>
        <center><Latex>{"$$u_t + 24 (u \\cdot u)u_x + u_{xxx} =0$$"}</Latex></center>
        <p>
        For the special case when <Latex>{"$$N$$"}</Latex> = 2, this vector equation 
        is equivalent to the Hirota-MKdV equation
        </p>
        <center><Latex>{"$$u_t + 24 \\bar{u} u u_x + u_{xxx} =0$$"}</Latex></center>
        <p>
        in complex-variable notation <Latex>{"$$u = u_1 +iu_2$$"}</Latex>.
        </p>
        <h2>1-Soliton Solution</h2>
        <p>
        Travelling waves are given by the 1-soliton solution
        </p>
        <center><Latex>{"$$ u(x,t) = \\left(\\frac{G}{F}\\right)\\bm{\\phi} $$"}</Latex></center>
        <p>
        with
        </p>
        <center>
            <Latex>
                {"$$ G = \\sqrt{c} , F = 2\\cosh(\\sqrt{c} \\xi) $$"}
            </Latex>
        </center>
        <p>
        where <Latex>{"$$ c > 0 $$"}</Latex> is the wave speed, 
        <Latex>{" $$ \\bm{\\phi} $$"}</Latex> is the orientation unit vector,
         and <Latex>{"$$ \\xi = x - ct $$"}</Latex> is a moving coordinate.
        </p>
        
        <h3>2-Soliton Solution</h3>
        <p>
        Collisions where a fast travelling wave with speed <Latex>{" $$ c_1 $$"}</Latex> 
        and orientation (unit vector) <Latex>{" $$ \\bm{\\phi}_1 $$"}</Latex> overtakes a 
        slow travelling wave with speed <Latex>{" $$ c_2 $$"}</Latex> and orientation 
        (unit vector) <Latex>{" $$ \\bm{\\phi}_2 $$"}</Latex> are given by the 2-soliton solution
        </p>
        <center>
            <Latex>
                {"$$ u(t,x)= \\frac{G_1}{F} \\bm{\\phi}_1 + \\frac{G_2}{F} \\bm{\\phi}_2 $$"}
            </Latex>
        </center>
        <p>
            with
        </p>
        <center>
            <Latex>
                {"$$ G_1 =(c_1 - c_2) \\sqrt{c_1} \\cosh(\\sqrt{c_2} \\xi_2) , G_2 =(c_1 - c_2) \\sqrt{c_2} \\cosh(\\sqrt{c_1} \\xi_1) $$"}
            </Latex>
        </center>
        <center>
            <Latex>
                {"$$ F = 4\\sqrt{c_1}\\sqrt{c_2} \\bm{\\phi}_1⋅\\bm{\\phi}_2 + (\\sqrt{c_1} - \\sqrt{c_2})^2 \\cosh(\\sqrt{c_1} \\xi_1 + \\sqrt{c_2} \\xi_2) + (\\sqrt{c_1} + \\sqrt{c_2})^2 \\cosh(\\sqrt{c_1} \\xi_1 - \\sqrt{c_2} \\xi_2) $$"}
            </Latex>
        </center>
        <p>
        where <Latex>{" $$ \\xi_1 = x - c_1 t $$"}</Latex>, <Latex>{"$$ \\xi_2 = x - c_2 t $$"}</Latex> are moving coordinates.
        </p>

        <h3>
        Interaction Properties
        </h3>
        <p>
        Depending on their speed ratio <Latex>{" $$ \\frac{c_1}{c_2} $$"}</Latex> and relative orientation 
        angle <Latex>{" $$ \\Delta \\bm{\\phi} = \\arccos(\\bm{\\phi}_1 \\cdot \\bm{\\phi}_2) $$"}</Latex>, 
        the fast and slow waves in a collision exhibit three different types of nonlinear interactions.
        </p>
        <p>
        1) Merge-Split: the waves first merge together at <Latex>{" $$ t=x=0 $$"}</Latex> and then split apart into their original shapes and speeds.
        </p>
        <p>
        2) Bounce-Exchange: the waves first bounce and then exchange their shapes and speeds at <Latex>{" $$ t=x=0 $$"}</Latex>.
        </p>
        <p>
        3) Absorb-Emit: the fast wave gradually first absorbs and then emits the slow wave.
        </p>
        <p>
        In all three types of interactions, the waves emerging from the collision retain the 
        shape, speed, and orientation of the initial two waves. The only remnant of the 
        interaction is a forward shift in the position of the faster wave
        </p>
        <center>
            <Latex>
                {"$$ \\Delta x_1 = \\frac{2}{\\sqrt{c_1}}\\ln\\left(\\frac{\\sqrt{c_1}+\\sqrt{c_2}}{\\sqrt{c_1}-\\sqrt{c_2}}\\right) > 0 $$"}
            </Latex>
        </center>
        <p>
        and a backward shift in the position of the slower wave
        </p>
        <center>
            <Latex>
                {"$$ \\Delta x_2 = \\frac{2}{\\sqrt{c_2}}\\ln\\left(\\frac{\\sqrt{c_1}-\\sqrt{c_2}}{\\sqrt{c_1}+\\sqrt{c_2}}\\right) < 0 $$"}
            </Latex>
        </center>
        <p>
        where these position shifts depend only on the speeds of the waves but not on their orientations.
        </p>
       <h3>
       Overlay of 1-Soliton Solutions and Corresponding 2-Soliton Solution
       </h3>
        
        <h3>
        Merge-Split Interaction
        </h3>
        <center>
          <p>
            <img src={require('./Gifs/Vector1/hirota_3d_r28_dphi075_merge.gif')} alt=''>
            </img>
        </p>
        </center>
        <center><p>speed ratio: <Latex>{"$$ \\frac{c_1}{c_2} = 2.8$$"}</Latex></p></center>
        <center><p>relative orientation angle: <Latex>{"$$ \\Delta \\bm{\\phi} = 0.75\\pi$$"}</Latex></p></center>
        <center>
          <p>
            <img src={require('./Gifs/Vector1/hirota_3d_r50_dphi03_merge.gif')} alt=''>
            </img>
        </p>
        </center>
        <center><p>speed ratio: <Latex>{"$$ \\frac{c_1}{c_2} = 50$$"}</Latex></p></center>
        <center><p>relative orientation angle: <Latex>{"$$ \\Delta \\bm{\\phi} = 0.3\\pi$$"}</Latex></p></center>

        <center><h3>
        Bounce-Exchange Interaction
        </h3></center>
        <center>
          <p>
            <img src={require('./Gifs/Vector1/hirota_3d_r28_dphi03_bounce.gif')} alt=''>
            </img>
        </p>
        </center>
        <center><p>speed ratio: <Latex>{"$$ \\frac{c_1}{c_2} = 2.8$$"}</Latex></p></center>
        <center><p>relative orientation angle: <Latex>{"$$ \\Delta \\bm{\\phi} = 0.3\\pi$$"}</Latex></p></center>

        <center><h3>
        Hirota absorb-emit interaction 
        </h3></center>
        <center>
          <p>
            <img src={require('./Gifs/Vector1/hirota_3d_r28_dphi095_absorb.gif')} alt=''>
            </img>
        </p>
        </center>
        <center><p>speed ratio: <Latex>{"$$ \\frac{c_1}{c_2} = 2.8$$"}</Latex></p></center>
        <center><p>relative orientation angle: <Latex>{"$$ \\Delta \\bm{\\phi} = 0.95\\pi$$"}</Latex></p></center>
        <center>
          <p>
            <img src={require('./Gifs/Vector1/hirota_3d_r50_dphi075_absorb.gif')} alt=''>
            </img>
        </p>
        </center>
        <center><p>speed ratio: <Latex>{"$$ \\frac{c_1}{c_2} = 50$$"}</Latex></p></center>
        <center><p>relative orientation angle: <Latex>{"$$ \\Delta \\bm{\\phi} = 0.75\\pi$$"}</Latex></p></center>
        <center>
          <p>
            <img src={require('./Gifs/Vector1/hirota_3d_opposite.gif')} alt=''>
            </img>
        </p>
        </center>
        <center><p>speed ratio: <Latex>{"$$ \\frac{c_1}{c_2} = 9$$"}</Latex></p></center>
        <center><p>relative orientation angle: <Latex>{"$$ \\Delta \\bm{\\phi} = \\pi$$"}</Latex></p></center>
      </div>
    );
  };
  
  export default VectorI;
  