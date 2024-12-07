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
                <div className="bg-[#d38b58] p-6 rounded-lg shadow-lg mx-4 h-64 w-96 flex items-center justify-center">
                     <h2 className="text-2xl font-semibold text-center">DRINK MENU</h2>
                </div>

                {/* Right Box */}
                <div className="bg-[#F0CDBF] p-6 rounded-lg shadow-lg mx-4 h-64 w-96 flex items-center justify-center">
                    <h2 className="text-2xl font-semibold text-center">FOOD MENU</h2>
                </div>
            </div>
        </div>
    )
}

export default DrinkFood
