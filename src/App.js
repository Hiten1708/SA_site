import './App.css';
import TitleBar from './components/titleBar';
import HomePage from './components/home';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import NonLinear from './components/NonLinear';
import Interactions from './components/Interactions';
import Properties from './components/Properties';
import KdVsolitons  from './components/KdVsolitons';
import MKdVsolitons from './components/MKdVsolitons';
import ComplexmKdVI from './components/ComplexmKdVI';
import ComplexmKdVII from './components/ComplexmKdVII';
import OscillatoryI from './components/OscillatoryI';
import OscillatoryII from './components/OscillatoryII';
import BreatherI from './components/BreatherI'
import BreatherII from './components/BreatherII'
import VectorI from './components/VectorI';
import VectorII from './components/VectorII';
import Footer from './components/footer';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={
        <>
        <TitleBar />
        <HomePage />
        </>
        } />
        
          <Route path="/non-linear-wave-equation" element={
          <>
          <TitleBar />
          <NonLinear/>
          </>
          } />
         <Route path="/Interactions" element={
          <>
          <TitleBar />
          <Interactions/>
          </>
          } />
          <Route path="/Properties" element={
          <>
          <TitleBar />
          <Properties/>
          </>
          } />
          <Route path="/KdVsolitons" element={
          <>
          <TitleBar />
          <KdVsolitons/>
          </>
          } />
          <Route path="/MKdVsolitons" element={
          <>
          <TitleBar />
          <MKdVsolitons/>
          </>
          } />
          <Route path="/ComplexmKdVI" element={
          <>
          <TitleBar />
          <ComplexmKdVI/>
          </>
          } />
          <Route path="/ComplexmKdVII" element={
          <>
          <TitleBar />
          <ComplexmKdVII/>
          </>
          } />
          <Route path="/OscillatoryI" element={
          <>
          <TitleBar />
          <OscillatoryI/>
          </>
          } />
          <Route path="/OscillatoryII" element={
          <>
          <TitleBar />
          <OscillatoryII/>
          </>
          } />
          <Route path="/BreatherI" element={
          <>
          <TitleBar />
          <BreatherI/>
          </>
          } />
          <Route path="/BreatherII" element={
          <>
          <TitleBar />
          <BreatherII/>
          </>
          } />
          <Route path="/VectorI" element={
          <>
          <TitleBar />
          <VectorI/>
          </>
          } />
          <Route path="/VectorII" element={
          <>
          <TitleBar />
          <VectorII/>
          </>
          } />
      </Routes>
      </BrowserRouter>
        <Footer/>
    </div>
  );
}

export default App;
