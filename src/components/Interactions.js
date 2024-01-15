import React from 'react';
import Latex from 'react-latex';
import 'katex/dist/katex.min.css';
import './Interaction.css'
import NavLinks from './navLinks';

const Interactions = () => {
  
    return (
      <div className="Interactions-container">
        
        <center><h1>Generalized KdV Interactions</h1></center>
        
        <hr color='red'/><h2>What happens when nonlinear waves interact?</h2><hr color='red'/>
        <p>
        In linear interactions of localized travelling waves, 
        the initial wave profiles get superimposed as the waves collide and reappear as the waves move apart. 
        Does the GKdV equation exhibit similar behavior for colliding waves?
        </p>
        <center><p>
            <img src={require('./Gifs/Interactions/linear_superposition_kdv_waves.gif')} alt='linear_superposition_kdv_waves.gif'className='image'></img>
        </p></center>
        <p>
        This plot depicts the linear superposition of two traveling waves
        </p>
  
        <hr color='red'/><h2>The KdV Equation <Latex>{"$$ u_t + uu_x + u_{xxx} = 0 $$"}</Latex></h2><hr color='red'/>
        <p>
        Among all of the GKdV-p equations <Latex>{"$$ u_t + u^pu_x + u_{xxx} = 0 $$"}</Latex>, 
        the weakest nonlinearity occurs for the case <Latex>{"$$ p $$"}</Latex> = 1, which is the KdV equation.
        </p>
        <p>
        KdV travelling waves have the feature that their shape depends on their speed. 
        Faster waves are taller and narrower, while shorter waves are shorter and broader. 
        The ratio of height to width for a KdV travelling wave with speed <Latex>{"$$ c > 0 $$"}</Latex> 
        is approximately <Latex>{"$$ 3c : \\frac{2}{\\sqrt{c}} $$"}</Latex>.#####
        </p>
        <hr/><h3>Travelling wave solutions of the KdV equation (<Latex>{"$$p = 1$$"}</Latex>)</h3><hr/>
        <center><p>
            <img src={require('./Gifs/Interactions/overlay_kdv_waves.gif')} alt='overlay_kdv_waves.gif'className='image'></img>
        </p></center>
        <p>
        This plot depicts the overlay of two travelling waves with speeds <Latex>{"$$c1 > c2$$"}</Latex>.
        </p>
        <p>
        Collisions of KdV travelling waves are described by solutions whose initial profiles 
        are superpositions of two (or more) individually travelling waves with different speeds. 
        In these solutions, the waves undergo a nonlinear interaction that differs significantly 
        compared to a linear superposition.
        </p>
        <p>
        There are two kinds of collision behaviour, depending on the ratio of the initial wave speeds 
        where c1 and c2 are the respective speeds of the faster and slower waves. When the speed ratio 
        This plot depicts the overlay of two travelling waves with speeds is <Latex>{"$$\\frac{c1}{c2} > 3$$"}</Latex>, 
        the waves first merge and then split apart into their previous shape and speed. 
        In contrast, when the speed ratio is <Latex>{"$$\\frac{c1}{c2} < 3$$"}</Latex>, 
        the waves bounce and exchange both their shape and speed.
        </p>
        <hr/><h3>
        KdV (<Latex>{"$$ p =1 $$"}</Latex>) colliding wave solution with speed ratio <Latex>{"$$ \\frac{c1}{c2} > 3 $$"}</Latex>
        </h3><hr/>
        <center><p>
            <img src={require('./Gifs/Interactions/kdv-merge-split.gif')} alt='kdv-merge-split.gif'className='image'></img>
        </p></center>
        <p>
        This plot depicts the 'merge-split' type of interaction.
        </p>
        <hr/><h3>
        KdV (<Latex>{"$$ p =1 $$"}</Latex>) colliding wave solution with speed ratio <Latex>{"$$ \\frac{c1}{c2} < 3 $$"}</Latex>   
        </h3><hr/>
        <center>
          <p>
            <img src={require('./Gifs/Interactions/kdv-bounce-exchange.gif')} alt='kdv-bounce-exchange.gif'className='image'>
            </img>
        </p>
        </center>
        <p>
        This plot depicts the 'bouce-exchange' type of interaction.
        </p>
        <p>
        Remarkably, in all collisions, the only remnant of the 
        nonlinear interaction is a shift in the positions of the two waves.
        </p>
        <hr color='red'/><h3>
        Colliding wave solutions of the GKdV-p equation for <Latex>{"$$p$$"}</Latex> = 2, 3, 4
        </h3><hr color='red'/>
        <p>
        A natural question is whether colliding wave solutions of all 
        GKdV-p equations exhibit the same interaction properties as KdV travelling waves.
        </p>
        <p>
        Collisions of travelling waves with the next weakest nonlinearities 
        <Latex>{"$$p$$"}</Latex> = 2, 3, 4 are depicted in the following plots. 
        The GKdV-2 case is known as the modified KdV (MKdV) equation.
        </p>
        
        <center><h4>MKdV(<Latex>{"$$p$$"}</Latex>=2)</h4>
          <p>
            <img src={require('./Gifs/Interactions/GKdV-2_collision_overlay.gif')} alt=''className='image'>
            </img>
        </p>
        </center>
        
        <center><h4>GKdV-3</h4>
          <p>
            <img src={require('./Gifs/Interactions/GKdV-3_collision_overlay.gif')} alt=''className='image'>
            </img>
        </p>
        </center>
        <center><h4>GKdV-4</h4>
          <p>
            <img src={require('./Gifs/Interactions/GKdV-4_collision_overlay.gif')} alt='' className='image'>
            </img>
        </p>
        </center>
        <p>
        The MKdV solution exhibits the same properties as the KdV solution, 
        while the GKdV-3 and GKdV-4 solutions develop left-moving tails. 
        The nonlinear interaction for the GKdV-4 solution is so strong that 
        the shorter wave appears to completely stop while the taller wave accelerates.
        </p>
        <NavLinks prePage="/non-linear-wave-equation" nextPage="/Properties" prePageName="Nonlinear Wave Equations" nextPageName='Properties and Types of Solitons'/>
      </div>

    );
  };
  
  export default Interactions;
  