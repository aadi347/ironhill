import React from 'react'
import backgroundImage from "../assets/images/abstract-black-watercolor-background_53876-99375.jpg"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BrewHouses from '../components/BrewHouses';
import Sold from '../components/sold';
import Testimonial from '../components/Testimonials';


const Home = () => {
    
    return (
        <section
          className="bg-cover bg-center h-screen px-6"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          {/* Overlay for text readability */}
          <div className="absolute inset-0 bg-black opacity-50"></div>
    
          {/* Hero Content */}
          <div className="relative z-10 flex items-center justify-center text-center h-full px-6">
            <div className="text-white">
              <h1 className="text-5xl font-bold mb-4 tracking-wide">Welcome to Our Brew House</h1>
              <p className="text-lg mb-8">
                Discover the finest craft beer and experience the art of brewing in style.
              </p>
              <a
                href="#"
                className="inline-block bg-orange-500 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-orange-400 transition"
              >
                Explore Now
              </a>
            </div>
          </div>

          <BrewHouses />
          <Sold />
          <Testimonial />
   
        </section>
    )
}

export default Home;
