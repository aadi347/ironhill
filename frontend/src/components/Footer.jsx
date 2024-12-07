import React from 'react';

const Footer = () => {
  return (
    <section className="bg-black text-white py-8 relative top-9">
      <div className="container mx-auto">
      <div className="flex justify-center items-center">
         <img src="https://ironhillindia.com/images/ironhill-logo-white-bottom.svg" alt="Ironhill Logo" />
    </div>


        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center mb-8">
          <div>
            <a href="aboutus.html" className="text-white hover:text-gray-400">About us</a>
          </div>
          <div>
            <a href="craftbeer.html" className="text-white hover:text-gray-400">Craft Beer</a>
          </div>
          <div>
            <a href="brew-house.html" className="text-white hover:text-gray-400">Brew Houses</a>
          </div>
          <div>
            <a href="franchise-enquiry.html" className="text-white hover:text-gray-400">Franchise</a>
          </div>
        </div>

        <div className="text-center text-sm">
          <div>
            © <span>{new Date().getFullYear()}</span> Powered by{' '}
            <a
              href="https://fullstackventures.in/"
              className="text-white hover:text-gray-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              Full Stack Ventures LLP
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
