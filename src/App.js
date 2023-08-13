import React from 'react';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import SearchPage from './pages/SearchPage';
import { BrowserRouter as Router,  Routes, Route,} from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
<Routes>
  <Route path="/search" element={<SearchPage/>} /> 
 
  <Route path="/" element={<Home/>}  />
  <Route path="/about" element={<About/>}  />

  
</Routes>
  </Router>
    </div>


  );
  }

export default App;
    