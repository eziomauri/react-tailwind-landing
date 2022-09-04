import React, { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'


const Navbar = () => {

  const [nav, setNav] = useState(false)

  const handleNav = () => (
    setNav(!nav)
  )

  return (
    /* larger than md */
    <div className='flex justify-between text-white items-center max-w-[1240px] mx-auto h-24 px-4'>
      <h1 className=" text-3xl font-bold text-[#00df9a] uppercase">React.</h1>
      <ul className='hidden md:flex'>
        <li className='p-4'>Home</li>
        <li className='p-4'>Company</li>
        <li className='p-4'>Resources</li>
        <li className='p-4'>About</li>
        <li className='p-4'>Contact</li>
      </ul>
      <div className='cursor-pointer block md:hidden hover:scale-110' onClick={handleNav}> {/* Na is initially TRUE, then on click nav becomes FALSE so it goes from hamburger menu to X */}
        {nav ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30} />}
      </div>
      {/* mobile navbar */}
      <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed ease-in-out duration-500 left-[-100%]'}>
        <h1 className=" text-3xl font-bold text-[#00df9a] m-4 uppercase">React.</h1>
        <ul className='p-4 uppercase'>
          <li className='p-4 border-b cursor-pointer border-gray-600 hover:font-bold'>Home</li>
          <li className='p-4 border-b cursor-pointer border-gray-600 hover:font-bold'>Company</li>
          <li className='p-4 border-b cursor-pointer border-gray-600 hover:font-bold'>Resources</li>
          <li className='p-4 border-b cursor-pointer border-gray-600 hover:font-bold'>About</li>
          <li className='p-4 hover:font-bold'>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar