import React from 'react'
import backgroundImage from "../assets/images/abstract-black-watercolor-background_53876-99375.jpg"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BrewHouses from '../components/BrewHouses';
import Sold from '../components/sold';
import Testimonial from '../components/Testimonials';
import DrinkFood from '../components/Drink&Food';
import Calender from '../components/calender';
import Showcase from '../components/Showcase';
import ReviewComponent from '../components/ReviewComponent';
import Footer from '../components/Footer';
import ironhill from "../assets/images/ironhill-india-logo-large.svg"

const Home = () => {
    
    return (
        <section
        className="relative bg-cover bg-center h-screen px-6"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <img 
         src="https://ironhillindia.com/images/ironhill-india-logo-large.svg" 
         alt="Foreground" 
         className="absolute top-36 left-72 w-3/5 h-3/5"
        />
      
        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center text-center h-full">
          <div className="text-white px-6">
         
          <p className="text-lg mb-8 relative top-60">
          ONE FOR ALL, ALL FOR ONE.
          </p>
          
          </div>
        </div>

          <BrewHouses />
          <Sold />
          <Testimonial />
          <DrinkFood />
          <Calender />
          <Showcase />
          <ReviewComponent />
          <Footer />
        </section>
    )
}

export default Home;
