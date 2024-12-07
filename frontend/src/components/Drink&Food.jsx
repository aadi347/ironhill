import React from 'react'
import container1 from '../assets/images/container1.jpg'

const DrinkFood = () => {
    return (
        <div className="relative bg-cover bg-center w-full h-96">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black"></div>
            
            {/* Content */}
            <div className="absolute inset-0 flex justify-center items-center px-8">
                {/* Left Box */}
                <div className="bg-[#d38b58] p-6 rounded-lg shadow-lg mx-4 h-64 w-96">
                    <h2 className="text-2xl font-semibold">Left Box</h2>
                    <p className="text-gray-700">This is the left box content.</p>
                </div>

                {/* Right Box */}
                <div className="bg-[#F0CDBF] p-6 rounded-lg shadow-lg mx-4 h-64 w-96">
                    <h2 className="text-2xl font-semibold">Right Box</h2>
                    <p className="text-gray-700">This is the right box content.</p>
                </div>
            </div>
        </div>
    )
}

export default DrinkFood
