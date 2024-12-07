import React from 'react'
import bird from '../assets/images/blog-bird.svg'
import reward from '../assets/images/reqard.png'
const Calender = () => {
    return (
        <div className="flex py-6">
        <div className="w-1/2 p-10 bg-[#F0CDBF]">
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <p>
            Keep up with Ironhill India. Events, Performances, Beer calendar, Cocktail
            events - your one stop index to all things 'happening' at Ironhill
            India.
          </p>
          <div className="mt-10 w-60 h-60">
            <img src={bird} alt="bird" />
          </div>
          <p className="mt-10">COMING SOON...</p>
        </div>
        <div className="w-1/2 bg-black text-white p-10">
          <h1 className="text-4xl font-bold mb-4">Rewards program</h1>
          <p>
            It pays to be a part of Ironhilll. Earn reward points every time you
            visit Ironhill outlets anywhere in India, as part of the centralised
            reward scheme.
          </p>
          <div className="mt-1 w-60 h-60">
            <img src={reward} alt="flags" />
          </div>
          <p className="mt-10">COMING SOON...</p>
        </div>
      </div>
    )
}

export default Calender
