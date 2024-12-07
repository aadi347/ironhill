import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.JSX';
import Home from './pages/home';

const App = () => {
  return (
    <Router>
    <Navbar />
    <Routes>
    <Route path='/' element={<Home />} />

    </Routes>
    {/* <Footer /> */}
  </Router>
  )
}

export default App
