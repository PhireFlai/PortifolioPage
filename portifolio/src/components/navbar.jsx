import React from 'react'
import Logo from '../assets/logo-white.png'


const Navbar = () => {
  return (
    <div className='flex w-full justify-between'>
        <div className='flex w-1/5 bg-black justify-center items-center'>
            <img src={Logo} alt='logo' className='flex object-scale-down  max-h-[90px]'/>
        </div>



        <ul className='flex w-4/5 bg-gray-800 justify-between items-center '>
            {['about', 'work', 'skills', 'contact'].map((item)=>(
                // <div>
                <li key={`link-${item}`} className='mx-2 my-2 w-full py-1 uppercase text-center  ease-in-out duration-200 hover:bg-gray-400 hover:border-gray-300'>
                    <div />
                    <a className='text-base sm:text-[10px] lg:text-xl text-white' href={`#${item}`}>{item}</a>
                </li>
                
            ))}
        </ul>

    </div>
  )
}

export default Navbar