import React from 'react';
import Latex from 'react-latex';
import 'katex/dist/katex.min.css';
import './mKdVsolitons.css';
import mKdV_space_time_psi0_merge from './Gifs/mKdVsolitons/space_time_psi0_merge.jpg'
import mKdV_space_time_psi0_bounce from './Gifs/mKdVsolitons/space_time_psi0_bounce.jpg'
import mKdV_space_time_psipi from './Gifs/mKdVsolitons/space_time_psipi.jpg'
import NavLinks from './navLinks';

const MKdVsolitons = () => {
  
    return (
      <div className="mKdVsolitons-container">
        
        <center><h1>mKdV Solitons</h1></center>
        
        <hr color='red'/><h2>Modified KdV Equation <Latex>{"$$ u_t + 24u^2u_x + u_{xxx} = 0 $$"}</Latex></h2><hr color='red'/>
        <p>
        Travelling wave solutions of the general mKdV equation 
        <Latex>{"$$ u_t + \\alpha u^2u_x + \\beta u_{xxx} = 0 $$"}</Latex> are non-singular 
        only when the coefficients of the nonlinear convective term <Latex>{"$$ u^2u_x $$"}</Latex> 
        and the linear dispersive term uxxx have a relative positive sign, 
        <Latex>{"$$ \\frac{\\alpha}{\\beta} >0 $$"}</Latex> (called the defocusing case). 
        Up their relative sign, these coefficients <Latex>{"$$ \\alpha $$"}</Latex>, 
        <Latex>{"$$ \\beta $$"}</Latex> can be freely changed by a scaling transformation on the 
        variables <Latex>{"$$ u $$"}</Latex>, <Latex>{"$$ x $$"}</Latex>, <Latex>{"$$ t $$"}</Latex>. 
        The conventional choice <Latex>{"$$ \\alpha $$"}</Latex> = 24, <Latex>{"$$ \\beta $$"}</Latex> = 1 
        eliminates awkward numerical factors in the expressions for single and multi soliton solutions.
        </p>
        <p>
            In contrast to the KdV equation, a reflection transformation <Latex>{"$$ u \\rightarrow -u $$ "}</Latex> 
            is a symmetry for the mKdV equation. Every mKdV solution thereby has a mirror solution that differs 
            only by a reflection (i.e. an overall <Latex>{"$$ \\pm $$"}</Latex> sign).
        </p>
  
        <hr/><h2>1-Soliton Solution</h2><hr/>
        <p>
        The mKdV 1-soliton solution is
        </p>
        <center><Latex>{"$$ u(x,t) = s\\frac{\\sqrt{c}}{2(\\cosh(\\sqrt{c}\\xi))} $$"}</Latex></center>
        <p>
        where <Latex>{"$$ c > 0 $$"}</Latex> is the wave speed,<Latex>{"$$ s =\\pm 1 $$"}</Latex> 
        is an up/down orientation of the wave profile, and <Latex>{"$$ \\xi = x - ct $$"}</Latex> is a moving coordinate.
        </p>
        <center>
          <p>
            <img src={require('./Gifs/mKdVsolitons/mkdv_1soliton_up.gif')} alt=''className='image'>
            </img>
        </p>
        </center>
        <center>
          <p>
            <img src={require('./Gifs/mKdVsolitons/mkdv_1soliton_down.gif')} alt=''className='image'>
            </img>
        </p>
        </center>
        <p>
        The position of the wave peak at time <Latex>{"$$t$$"}</Latex> is <Latex>{"$$x = ct$$"}</Latex>.
        </p>
        <hr/><h2>2-Soliton Solution</h2><hr/>
        <p>
        The mKdV 2-soliton solution is
        </p>
        <center>
            <Latex>
                {"$$u(x,t) = \\frac{(c_1-c_2)(s_1\\sqrt{c_1}\\cosh(\\sqrt{c_2}\\xi_2) + s_2\\sqrt{c_2}\\sinh(\\sqrt{c_1}\\xi_1))}{4s_1s_2\\sqrt{c_1}\\sqrt{c_2}+(\\sqrt{c_1}-\\sqrt{c_2})^2cosh(\\sqrt{c_1}\\xi_1 + \\sqrt{c_2}\\xi_2) + (\\sqrt{c_1} + \\sqrt{c_2})^2\\cosh(\\sqrt{c_1}\\xi_1 - \\sqrt{c_2}\\xi_2)}$$"}
            </Latex>
        </center>
        <p>
        where <Latex>{"$$ c_1 > c_2 > 0 $$"}</Latex> are the wave speeds, <Latex>{"$$ s_1 = \\pm 1 $$"}</Latex> 
        and <Latex>{"$$ s_2 = \\pm 1 $$"}</Latex> are the wave orientations, and 
        <Latex>{" $$ \\xi_1 = x - c_1 t $$"}</Latex>, <Latex>{"$$ \\xi_2 = x - c_2 t $$"}</Latex> are moving coordinates.
        </p>
        <p>
        As <Latex>{"$$ t → \\pm ∞ $$"}</Latex>, the 2-soliton solution has the asymptotic form of 
        a linear superposition of travelling waves (i.e. single solitons) with speeds <Latex>{"$$ c_1 $$"}</Latex> and <Latex>{"$$ c_2 $$"}</Latex> 
        and up/down orientation <Latex>{"$$ s_1 = \\pm 1 $$"}</Latex> and <Latex>{"$$ s_2 = \\pm 1 $$"}</Latex>. 
        The two waves wave collide such that the moment of greatest nonlinear interaction occurs 
        at <Latex>{"$$t=0$$"}</Latex> when the profile is symmetric is symmetric around <Latex>{"$$ x=0 $$"}</Latex> . The shape of this profile 
        <Latex>{"$$u(x,0)= u(-x,0)$$"}</Latex> characterizes the nonlinear interaction of the waves in the collision.
        </p>
        <p>
        When the two waves have the same orientation <Latex>{"$$ s_1 = s_2 = \\pm 1 $$"}</Latex>, their nonlinear interaction depends on 
        whether their speed ratio is greater or less than a critical value <Latex>{"$$ \\frac{c_1}{c_2} = \\frac{7+3\\sqrt{5}}{2} $$ "}</Latex> 
        (as determined from the condition that the convexity of <Latex>{"$$ u(x,0) $$"}</Latex> vanishes). If the speed ratio is 
        <Latex>{" $$ \\frac{c_1}{c_2} > \\frac{7+3\\sqrt{5}}{2} $$"}</Latex>, the waves interact nonlinearly by first merging at <Latex>{"$$ x = t = 0 $$"}</Latex> and then 
        splitting apart. In this case the profile <Latex>{"$$ u(x,0) $$"}</Latex> has a single peak at <Latex>{"$$ x = 0 $$ "}</Latex> 
        and an exponentially diminishing tail as <Latex>{"$$ x \\rightarrow \\pm ∞ $$"}</Latex>.
        </p>
        <center><h3>
        mKdV merge-split interaction
        </h3></center>
        <center>
          <p>
            <img src={require('./Gifs/mKdVsolitons/2D_merge.gif')} alt=''className='image'>
            </img>
        </p>
        </center>
        <center><p>ratio of fast to slow wave speeds is <Latex>{"$$ > \\frac{7+3\\sqrt{5}}{2} \\cong 6.85$$"}</Latex></p></center>
        <center><p>
        <p>(Click <a href={mKdV_space_time_psi0_merge} target="_blank" rel="noopener noreferrer">here</a> to see the space time portrait)</p>
        </p></center>
        <p>
        If instead the speed ratio is <Latex>{" $$ \\frac{c_1}{c_2} < \\frac{7+3\\sqrt{5}}{2} $$"}</Latex>, the waves interact nonlinearly 
        by first bouncing and then exchanging shapes and speeds at <Latex>{"$$x=t=0$$"}</Latex>. 
        In this case the profile <Latex>{"$$ u(x,0) $$"}</Latex> has a double peak around <Latex>{"$$x=0$$ "}</Latex> 
        and an exponentially diminishing tail as <Latex>{"$$ x \\rightarrow \\pm ∞ $$"}</Latex>.
        </p>
        <center><h3>
        mKdV bounce-exchange interaction 
        </h3></center>
        <center>
          <p>
            <img src={require('./Gifs/mKdVsolitons/2D_bounce.gif')} alt=''className='image'>
            </img>
        </p>
        </center>
        <center><p>ratio of fast to slow wave speeds is <Latex>{"$$ < \\frac{7+3\\sqrt{5}}{2} \\cong 6.85$$"}</Latex></p></center>
        <center><p>
        <p>(Click <a href={mKdV_space_time_psi0_bounce} target="_blank" rel="noopener noreferrer">here</a> to see the space time portrait)</p>
        </p></center>
        <p>
        In contrast when the two waves have opposite orientations <Latex>{"$$ s_1 = -s_2 = \\pm 1 $$"}</Latex>, 
        they have a completely different nonlinear interaction where the slow wave 
        gradually is first absorbed and then emitted by the fast wave. 
        Their profile <Latex>{"$$ u(x,0) $$"}</Latex> in this case has a central peak at <Latex>{"$$x=0$$ "}</Latex> plus a 
        pair of side peaks around <Latex>{"$$x \\not= 0$$ "}</Latex> with an exponentially diminishing tail as <Latex>{"$$ x \\rightarrow \\pm ∞ $$"}</Latex>.
        </p>
        <center><p>
        mKdV absorb-emit interaction
        </p></center>
        <center>
          <p>
            <img src={require('./Gifs/mKdVsolitons/2D_psipi.gif')} alt=''className='image'>
            </img>
        </p>
        </center>
        <center><p>
        <p>(Click <a href={mKdV_space_time_psipi} target="_blank" rel="noopener noreferrer">here</a> to see the space time portrait)</p>
        </p></center>
        <hr/><h3>
        Overlay of 1-soliton solutions and corresponding 2-soliton solution
        </h3><hr/>
        <center>
          <p>
            <img src={require('./Gifs/mKdVsolitons/2D_overlay_merge.gif')} alt=''className='image'>
            </img>
        </p>
        </center>
        <center><p>ratio of fast to slow wave speeds is <Latex>{"$$ > \\frac{7+3\\sqrt{5}}{2} \\cong 6.85$$"}</Latex></p></center>
        <center>
          <p>
            <img src={require('./Gifs/mKdVsolitons/2D_overlay_bounce.gif')} alt=''className='image'>
            </img>
        </p>
        </center>
        <center><p>ratio of fast to slow wave speeds is <Latex>{"$$ < \\frac{7+3\\sqrt{5}}{2} \\cong 6.85$$"}</Latex></p></center>
        <center>
          <p>
            <img src={require('./Gifs/mKdVsolitons/2D_overlay_psipi.gif')} alt='' className='image'>
            </img>
        </p>
        </center>
        <p>
        In all three types of interactions, the waves emerging from the collision retain 
        the shape and speed of the initial two waves, but the collision causes a position 
        shift such that the faster wave gets shifted forward by
        </p>
        <center>
            <Latex>{"$$ \\Delta{x_1} = \\frac{2}{\\sqrt{c_1}}\\ln\\left(\\frac{\\sqrt{c_1}+\\sqrt{c_2}}{\\sqrt{c_1}-\\sqrt{c_2}}\\right) > 0$$"}</Latex>
        </center>
        <p>
        and the slower wave gets shifted backward by
        </p>
        <center>
        <Latex>{"$$ \\Delta{x_2} = \\frac{2}{\\sqrt{c_2}}\\ln\\left(\\frac{\\sqrt{c_1}-\\sqrt{c_2}}{\\sqrt{c_1}+\\sqrt{c_2}}\\right) > 0$$"}</Latex>
        </center>
        <p>
        where <Latex>{"$$ \\sqrt{c_1} > \\sqrt{c_2} > 0 $$"}</Latex>. 
        These position shifts are the same as those for the KdV 2-soliton solution.
        </p>
        <hr/><h2>
        Multi-soliton Collisions
        </h2><hr/>
        <p>
        Multi-soliton solutions have the same interaction features displayed by the 2-soliton solution.
        </p>
        <NavLinks prePage="/KdVsolitons" nextPage="/ComplexmKdVI" prePageName='KdV Solitons' nextPageName='Hirota Solitons'/>
      </div>
    );
  };
  
  export default MKdVsolitons;
  