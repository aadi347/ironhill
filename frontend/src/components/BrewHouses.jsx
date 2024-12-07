import React from "react";
import hyderabad from "../assets/images/abstract-black-watercolor-background_53876-99375.jpg"; // Replace with actual image paths
import vijayawada from "../assets/images/destroyed-architecture-with-great-white-mountain_181624-470.jpg";
import visakhapatnam from "../assets/images/people-beach-black-white_119272-51.jpg";
import bengaluru from "../assets/images/silhouettes-sunset-beach_74658-153.jpg";

const BrewHouses = () => {
  const brewHouses = [
    { name: "Hyderabad", image: hyderabad },
    { name: "Vijayawada", image: vijayawada },
    { name: "Visakhapatnam", image: visakhapatnam },
    { name: "Bengaluru", image: bengaluru },
  ];

  return (
    <div className="bg-white py-12 px-6">
      {/* Title */}
      <h2 className="text-4xl font-bold text-center uppercase mb-10 tracking-wide">
        Brew Houses
      </h2>

      {/* Brew Houses Section */}
      <div className="relative flex items-center justify-between px-6 lg:px-20">
        {/* Left Arrow */}
        <button className="absolute left-2 lg:left-6 w-10 h-10 flex items-center justify-center bg-transparent border-2 border-black rounded-full hover:bg-black hover:text-white transition">
          <span className="text-xl font-bold">&lt;</span>
        </button>

        {/* Brew Houses Cards */}
        <div className="flex gap-8 mx-auto overflow-x-scroll lg:overflow-visible no-scrollbar">
          {brewHouses.map((brew, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 min-w-[150px]"
            >
              {/* Image */}
              <div className="relative w-36 h-36 lg:w-48 lg:h-48 border-4 border-black rounded-full overflow-hidden">
                <img
                  src={brew.image}
                  alt={brew.name}
                  className="w-full h-full object-cover grayscale"
                />
                {/* Decorations */}
                <div className="absolute -top-2 -left-4 text-xl">✨</div>
                <div className="absolute -bottom-3 -right-4 text-xl">🌿</div>
              </div>
              {/* Name */}
              <h3 className="text-lg font-bold uppercase text-center tracking-wide">
                {brew.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button className="absolute right-2 lg:right-6 w-10 h-10 flex items-center justify-center bg-transparent border-2 border-black rounded-full hover:bg-black hover:text-white transition">
          <span className="text-xl font-bold">&gt;</span>
        </button>
      </div>
    </div>
  );
};

export default BrewHouses;
