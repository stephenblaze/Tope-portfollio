import './App.css';
// import { useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Home.js';
import About from './About.js';
import Contact from './Contact.js';
import Tope from './Tope.js';
import Iam from './Iam.js';
import Work from './Work.js';

function App() {
  return (
    <div className="App">
    

<Routes>
  <Route exact path="/" element={<Home />} />
  <Route exact path="/About" element={<About />} />
  <Route exact path="/Contact" element={<Contact />} />
  <Route exact path="/iam" element={<Iam />} />
  <Route exact path="/Work" element={<Work />} />
</Routes>


</div>
    
  );
}

export default App;
