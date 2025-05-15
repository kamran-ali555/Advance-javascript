import React from 'react'
import logo from '../assets/imx.svg'
import aro from '../assets/aro.png'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center max-w[1440px] w-[1240px] py-[30px] px-[40px]'>
      <div>
        <img src={logo} alt="" />
      </div>
      <div className='flex justify-center items-center gap-[50px] text-xl'>
        <ul className='flex justify-center items-center gap-[30px] text-xl  font-bold '>
            <li id='menu-item' className=' transition-[1s]  hover:text-yellow-300'>Home</li>
            <li id='menu-item' className=' transition-[1s]  hover:text-yellow-300'>About</li>
            <li id='menu-item' className=' transition-[1s]  hover:text-yellow-300'>Our Programs <img className='w-[20px] inline' src={aro} alt="" /></li>
            <li id='menu-item' className=' transition-[1s]  hover:text-yellow-300'>Our Products  </li>
        </ul>
        <button className='py-[10px] px-[20px] text-white bg-blue-950 rounded hover:bg-white hover:text-black  '>Contact Us</button>
      </div>

    </div>
  )
}

export default Navbar
