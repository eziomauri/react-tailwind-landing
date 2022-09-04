import React from 'react'
import Typed from 'react-typed'

const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold p-2'>GROWING WITH DATA ANALYTICS</p>
            <h1 className='text-4xl font-bold md:py-6 md:text-7xl sm:text-6xl'>
                 Grow with data. 
            </h1>
            <div className='flex justify-center items-center'>
                <p className='py-4 md:text-4xl sm:text-3xl text-xl font-bold'>
                    Fast, flexible financing for 
                </p>
                <Typed className='pl-2 py-4 font-bold md:text-4xl sm:text-3xl text-xl md:pl-3'
                    strings={['BTB', 'BTC', 'SASS']}
                    typeSpeed={120}
                    backSpeed={140}
                    loop
                />
            </div>
            <p className='font-bold text-gray-500 text-xl md:text-2xl mx-6'>Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.</p>
            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium mx-auto my-6 py-3 text-black'>Get Started</button>
        </div>
    </div>
  )
}

export default Hero