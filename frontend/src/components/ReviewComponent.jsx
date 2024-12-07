import React, { useState } from "react";

const reviews = [
  {
    name: "John Doe",
    review: "Amazing experience! The ambiance was great, and the food was delicious. Will definitely come back!",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Jane Smith",
    review: "I had a fantastic time at this place. The staff was friendly, and the menu selection was top-notch.",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "Mike Johnson",
    review: "A cozy spot with great drinks. Highly recommend the craft beer selection. Worth the visit.",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
];

const ReviewComponent = () => {
  const [currentReviewIndex] = useState(0);

  return (
    <div className="relative py-12">
      {/* Left Background Image */}
      <img
        src="https://ironhillindia.com/images/left-leaf-bg.png"
        alt="Left Leaf"
        className="absolute top-0 left-0 object-cover"
      />
      {/* Right Background Image */}
      <img
        src="https://ironhillindia.com/images/right-leaf-bg.png"
        alt="Right Leaf"
        className="absolute top-0 right-0 object-cover"
      />

      {/* Review Section */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className=" max-w-lg w-full">
            {/* Review Image */}
            <div className="flex justify-center mb-4">
              <img
                src={reviews[currentReviewIndex].image}
                alt="Reviewer"
                className="w-24 h-24 rounded-full object-cover"
              />
            </div>

            {/* Review Text */}
            <p className="text-lg text-center mb-4">{reviews[currentReviewIndex].review}</p>

            {/* Reviewer Name */}
            <h3 className="text-xl font-semibold text-center">
              {reviews[currentReviewIndex].name}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewComponent;
