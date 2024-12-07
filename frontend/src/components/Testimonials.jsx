import React from "react";
import testimonialImage from "../assets/images/ironhill-culture-test11.svg"; // Replace with actual image path
import testimonialImage2 from "../assets/images/ironhill-experience-testi2.svg"
import testimonialImage3 from '../assets/images/home-our-people-img-testi3.png'

const Testimonial = () => {
  return (
    <section className="max-w-7xl mx-auto py-16 px-6">
      <div className="flex items-center space-x-8">
        {/* Image on the Left */}
        <div className="flex-shrink-0">
          <img
            src={testimonialImage}
            alt="Customer Testimonial"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text on the Right */}
        <div className="flex-1">
            <h1 className="text-4xl font-bold text-gray-900 relative bottom-8">THE IRONHILL CULTURE</h1>
          <blockquote className="text-xl text-gray-700 font-medium mb-6">
            "United by craft is the one gospel that keeps our taps flowing. We are on a mission to unite India, unite cities and unite people by a brand new signature craft culture. A culture so bold and leaps, it doesn’t weave stories, it weaves legends."
          </blockquote>
        </div>

      </div>

<section className="max-w-7xl mx-auto py-16 px-6">
  <div className="flex items-center space-x-8">
    {/* Text on the Left */}
    <div className="flex-1">
      <h1 className="text-4xl font-bold text-gray-900 relative bottom-8">
      THE IRONHILL EXPERIENCE
      </h1>
      <blockquote className="text-xl text-gray-700 font-medium mb-6">
        "Ironhill India defines its experience by sourcing quality raw ingredients from mineral-rich geographical locations. Our menu and offerings are made after diligent R&D to bring different flavours together to retain authenticity, taste and elements.."
      </blockquote>
    </div>

    {/* Image on the Right */}
    <div className="flex-shrink-0">
      <img
        src={testimonialImage2}
        alt="Customer Testimonial"
        className="object-cover"
      />
    </div>
  </div>
</section>
 
 {/* third section */}

 <section className="max-w-7xl mx-auto py-16 px-6">
  <div className="flex items-center space-x-8">
    {/* Image on the Left */}
    <div className="flex-shrink-0">
      <img
        src={testimonialImage}
        alt="Customer Testimonial"
        className="object-cover"
      />
    </div>

    {/* Text on the Right */}
    <div className="flex-1">
      <h1 className="text-4xl font-bold text-gray-900 relative bottom-8">
        THE IRONHILL CULTURE
      </h1>
      <blockquote className="text-xl text-gray-700 font-medium mb-6">
        "United by craft is the one gospel that keeps our taps flowing. We are on a mission to unite India, unite cities and unite people by a brand new signature craft culture. A culture so bold and leaps, it doesn’t weave stories, it weaves legends."
      </blockquote>
    </div>
  </div>
</section>

 </section>
  );
};

export default Testimonial;
