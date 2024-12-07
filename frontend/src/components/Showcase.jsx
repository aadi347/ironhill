import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaMapMarkerAlt } from "react-icons/fa";

const Showcase = () => {
  return (
    <div className="flex flex-wrap">
      {/* Media Section */}
      <div
        className="w-full md:w-1/2 p-4 bg-cover bg-center"
        style={{ backgroundImage: "url(https://ironhillindia.com/images/media-bg.jpg)" }}
      >
        <p className="text-2xl font-semibold mb-4 text-white">Media</p>
        <div className="desktop">
          <div className="flex flex-wrap mb-4">
            <div className="w-1/2 p-2">
              <a
                href="https://www.thehindu.com/news/cities/Vijayawada/ironhill-invests-6-cr-in-microbrewery-in-vijayawada/article22990812.ece"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://ironhillindia.com/images/media/vjmicrobrewery09.jpg"
                  alt="Media 1"
                  className="w-full h-auto object-cover rounded"
                />
              </a>
            </div>
            <div className="w-1/2 p-2">
              <a
                href="https://www.indulgexpress.com/food/2021/mar/26/ironhill-the-worlds-largest-microbrewery-opens-its-doors-in-marathalli-32629.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://ironhillindia.com/images/media/ironhill-1.jpg"
                  alt="Media 2"
                  className="w-full h-auto object-cover rounded"
                />
              </a>
            </div>
          </div>
          <a
            href="media.html"
            className="text-blue-500 hover:underline mt-4 inline-block"
          >
            VIEW ALL
          </a>
        </div>
      </div>

      {/* Contact Section */}
      <div className="w-full md:w-1/2 p-4 bg-[#F0CDBF]">
        <div className="contact-sec">
          <div className="text-4xl font-semibold mb-4">Contact us</div>
          <form name="ironhill-india-contact" className="mt-2 space-y-4" noValidate>
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="w-full p-2 border border-gray-300 rounded"
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="w-full p-2 border border-gray-300 rounded"
            />
            <input
              type="number"
              placeholder="Phone"
              name="phone"
              className="w-full p-2 border border-gray-300 rounded"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows="4"
              className="w-full p-2 border border-gray-300 rounded"
            ></textarea>
            <button
              type="submit"
              className="mt-4 px-6 py-2 bg-black text-white rounded hover:bg-blue-600"
            >
              Send
            </button>
          </form>
        </div>

        {/* Head Office Address */}
        <div className="mt-6 bg-white p-5 rounded shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Head Office Address</h3>
          <div className="flex items-center mb-4">
            <FaMapMarkerAlt className="text-gray-700 text-2xl mr-3" />
            <p className="text-gray-700">
              Rajapushpa House, Cyber Hills Colony, VIP Hills, Jaihind Enclave,
              Madhapur, Telangana 500081
            </p>
          </div>
          {/* Social Media Links */}
          <div className="flex gap-4 mt-4 text-2xl">
            <a href="https://www.facebook.com/ironhillindia" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-black hover:text-blue-800" />
            </a>
            <a href="https://www.instagram.com/ironhillindia/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-black hover:text-pink-700" />
            </a>
            <a href="https://www.linkedin.com/company/ironhill-india" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-black hover:text-blue-900" />
            </a>
            <a href="https://www.youtube.com/channel/UCO71E53Ux3AC0uwj65vfByw" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="text-black hover:text-red-800" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
