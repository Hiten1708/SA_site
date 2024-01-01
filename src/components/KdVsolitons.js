import React from 'react';
import Latex from 'react-latex';
import 'katex/dist/katex.min.css';
import './KdVsolitons.css';
import NavLinks from './navLinks';
import mergeSpacetime from './Gifs/KdVsolitons/spacetime_kdv_2soliton_merge-split.gif';

const KdVsolitons = () => {
  
    return (
      <div className="KdVsolitons-container">
  
        <center><h1>KdV Solitons</h1></center>
        <h2>KdV Equation <Latex>{"$$ u_t + \\alpha uu_x + \\beta u_{xxx} = 0 $$"}</Latex></h2>
        <p>
        The coefficients <Latex>{"$$\\alpha$$"}</Latex>, <Latex>{"$$\\beta$$"}</Latex> 
        in the general form of the KdV equation can be freely changed 
        through scaling/reflection transformations on the variables 
        <Latex>{"$$ u$$"}</Latex>,<Latex>{"$$x$$"}</Latex>,<Latex>{"$$t$$"}</Latex>. 
        A conventional choice is <Latex>{"$$\\alpha = 6 $$"}</Latex> , <Latex>{"$$\\beta = 1 $$"}</Latex>, 
        which eliminates awkward numerical factors in the expressions for soliton solutions.
        </p>
  
        <h2>1-Soliton Solution</h2>
        <p>
        The KdV 1-soliton solution is
        </p>
        <center><Latex>{"$$ u(x,t) = \\frac{c}{2(\\cosh^2(\\sqrt{c}\\xi/2))} $$"}</Latex></center>
        <p>
        where <Latex>{"$$ c > 0 $$"}</Latex> is the wave speed and <latex>{"$$ \\xi = x-ct $$"}</latex>is a moving coordinate.
        </p>
        <center>
          <p>
            <img src={require('./Gifs/KdVsolitons/kdv_1soliton.gif')} alt=''>
            </img>
        </p>
        </center>
        <p>
        The position of the wave peak at time <Latex>{"$$t$$"}</Latex> is <Latex>{"$$x = ct$$"}</Latex>.
        </p>
        <h3>2-Soliton Solution</h3>
        <p>
        The KdV 2-soliton solution is
        </p>
        <center>
            <Latex>
                {"$$u(x,t) = \\frac{2(c_1-c_2)(c_1\\cosh^2(\\sqrt{c_2}\\xi_2/2) + c_2\\sinh^2(\\sqrt{c_1}\\xi_1/2))}{(\\sqrt{c_1}-\\sqrt{c_2})cosh((\\sqrt{c_1}\\xi_1 + \\sqrt{c_2}\\xi_2)/2) + (\\sqrt{c_1} + \\sqrt{c_2})\\cosh((\\sqrt{c_1}\\xi_1 - \\sqrt{c_2}\\xi_2)/2)^2}$$"}
            </Latex>
        </center>
        <p>
        where <Latex>{"$$ c_1 > c_2 > 0 $$"}</Latex> are the wave speeds and 
        <Latex>{"$$ \\xi_1 = x - c_1t $$"}</Latex>, <Latex>{"$$ \\xi_2 = x - c_2t $$"}</Latex> are moving coordinates.
        </p>
        <p>
        As <Latex>{"$$ t → ±∞ $$"}</Latex>, the 2-soliton solution has the asymptotic form of 
        a linear superposition of travelling waves (i.e. single solitons) with speeds <Latex>{"$$ c_1 $$"}</Latex> and <Latex>{"$$ c_2 $$"}</Latex>. 
        The two waves wave collide such that the moment of greatest nonlinear interaction occurs 
        at <Latex>{"$$t=0$$"}</Latex> when the profile is symmetric is symmetric around <Latex>{"$$ x=0 $$"}</Latex> . The shape of this profile 
        <Latex>{"$$u(x,0)= u(-x,0)$$"}</Latex> is characterized by its convexity <Latex>{"$$ u(x,0)_{xx|x=0} $$"}</Latex> which is positive or negative depending 
        on whether the speed ratio is greater or less than a critical value <Latex>{"$$ \\frac{c_1}{c_2} =3 $$"}</Latex> (for which the convexity vanishes).
        </p>
        <p>
        For speed ratios <Latex>{"$$ \\frac{c_1}{c_2} > 3 $$"}</Latex>, the profile has a single peak 
        at <Latex>{"$$ x=0 $$"}</Latex> and an exponentially diminishing tail as <Latex>{"$$ x → ±∞ $$"}</Latex>. 
        In this case the waves interact nonlinearly by first merging 
        at <Latex>{"$$ x=t=0 $$"}</Latex> and then splitting apart.
        </p>
        <center><h3>
        KdV merge-split interaction
        </h3></center>
        <center>
          <p>
            <img src={require('./Gifs/KdVsolitons/kdv-merge-split.gif')} alt=''>
            </img>
        </p>
        </center>
        <center><p>ratio of fast to slow wave speeds is <Latex>{"$$ > 3$$"}</Latex></p></center>
        <center><p>
        <p>(Click <a href={mergeSpacetime} target="_blank" rel="noopener noreferrer">here</a> to see the space time portrait)</p>
        </p></center>
        <p>
        For speed ratios <Latex>{"$$ \\frac{c_1}{c_2} < 3 $$"}</Latex>, the profile has a single peak 
        at <Latex>{"$$ x=0 $$"}</Latex> and an exponentially diminishing tail as <Latex>{"$$ x → ±∞ $$"}</Latex>. 
        In this case the waves interact nonlinearly by first bouncing and then exchanging shapes and speeds at 
        at <Latex>{"$$ x=t=0 $$"}</Latex>
        </p>
        <center><h3>
        KdV bounce-exchange interaction 
        </h3></center>
        <center>
          <p>
            <img src={require('./Gifs/KdVsolitons/kdv-bounce-exchange.gif')} alt=''>
            </img>
        </p>
        </center>
        <center><p>ratio of fast to slow wave speeds is <Latex>{"$$ < 3$$"}</Latex></p></center>
        <center><p>
        <p>(Click <a href="./Gifs/KdVsolitons/spacetime_kdv_3soliton_case3.gif">
        here</a> to see the space time portrait)</p>
        </p></center>
        <h3>
        Overlay of 1-soliton solutions and corresponding 2-soliton solution
        </h3>
        <center>
          <p>
            <img src={require('./Gifs/KdVsolitons/overlay_kdv_merge_split.gif')} alt=''>
            </img>
        </p>
        </center>
        <center><p>
        ratio of fast to slow wave speeds is <Latex>{"$$ > 3$$"}</Latex>
        </p></center>
        <center>
          <p>
            <img src={require('./Gifs/KdVsolitons/overlay_kdv_bounce_exchange.gif')} alt=''>
            </img>
        </p>
        </center>
        <center><p>
        ratio of fast to slow wave speeds is <Latex>{"$$ < 3$$"}</Latex>
        </p></center>
        <p>
        In both types of interactions, the waves emerging from the collision retain the 
        shape and speed of the initial two waves, but the collision causes a position 
        shift such that the faster wave gets shifted forward by
        </p>
        <center>
            <Latex>{"$$ \\Delta{x_1} = \\frac{2}{k_1}\\ln\\left(\\frac{k_1+k_2}{k_1-k_2}\\right) >0$$"}</Latex>
        </center>
        <p>
        and the slower wave gets shifted backward by
        </p>
        <center>
        <Latex>{"$$ \\Delta{x_2} = \\frac{2}{k_2}\\ln\\left(\\frac{k_1-k_2}{k_1+k_2}\\right) <0$$"}</Latex>
        </center>
        <p>
        where <Latex>{"$$ k_1 = \\sqrt{c_1} > k_2 = \\sqrt{c_2} > 0 $$"}</Latex>.
        </p>
        <h3>
        Multi-soliton Collisions
        </h3>
        <p>
        Multi-soliton solutions have the same interaction features displayed by the 2-soliton solution.
        </p>
        <h3>
        3-Soliton Simultaneous Collision Solution
        </h3>
        <center>
          <p>
            <img src={require('./Gifs/KdVsolitons/kdv_3soliton_case1.gif')} alt=''>
            </img>
        </p>
        </center>
        <center><p>
        <p>(Click <a href="./Gifs/KdVsolitons/spacetime_kdv_3soliton_case3.gif">
        here</a> to see the space time portrait)</p>
        </p></center>
        <p>
        All three waves collide at <Latex>{"$$ x = 0 $$"}</Latex>, <Latex>{"$$ t = 0 $$"}</Latex>.
        </p>
        <h3>
        3-Soliton Pair-wise Collision Solution
        </h3>
        <center>
          <p>
            <img src={require('./Gifs/KdVsolitons/kdv_3soliton_case2.gif')} alt=''>
            </img>
        </p>
        </center>
        <center><p>
        <p>(Click <a href="./Gifs/KdVsolitons/spacetime_kdv_3soliton_case3.gif">
        here</a> to see the space time portrait)</p>
        </p></center>
        <p>
        The two fastest waves interact first and then overtake the slowest wave.
        </p>
        <h3>
        3-Soliton Pair-wise Collision Solution
        </h3>
        <center>
          <p>
            <img src={require('./Gifs/KdVsolitons/kdv_3soliton_case3.gif')} alt=''>
            </img>
        </p>
        </center>
        <center><p>
        <p>(Click <a href="./Gifs/KdVsolitons/spacetime_kdv_3soliton_case3.gif">
        here</a> to see the space time portrait)</p>
        </p></center>
        <p>
        The two slowest waves interact and eventually both are overtaken by the fastest wave.
        </p>
        <NavLinks prePage="/Properties" nextPage="/mKdVsolitons" />
      </div>
    );
  };
  
  export default KdVsolitons;
  