import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.JSX';
import Home from './pages/home';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
    <Navbar />
    <Routes>
    <Route path='/' element={<Home />} />
    </Routes>
  
  </Router>
  )
}

export default App
