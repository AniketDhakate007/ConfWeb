import {Routes,Route} from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
import Adv from './pages/advboard';
import Commit from './pages/commit';
import Kspeaker from './pages/kspeaker';
import Authors from './pages/authors';
import Program from './pages/program';
import Contact from './pages/contact';
import About from './pages/about';
import Register from './pages/register';




import './App.css';

export default function(){
  return(
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/advboard" element={<Adv/>}/>
      <Route path="/commitee" element={<Commit/>}/>
      <Route path="/kspeaker" element={<Kspeaker/>}/>
      <Route path="/authors" element={<Authors/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/program" element={<Program/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/about" element={<About/>}/>
      </Routes>
   
    </>
  )
}