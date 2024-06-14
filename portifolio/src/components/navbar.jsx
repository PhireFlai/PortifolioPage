import React, { useState } from 'react'
import Logo from '../assets/logo-white.png'
// import { easeIn, easeInOut, motion } from 'framer-motion';
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";




const Navbar = () => {
    const [mobileNav, setMobileNav] = useState(false);
    return (
        <div>
            <div className='hidden w-full bg-black justify-between sm:flex '>

                <div className='flex w-1/5 justify-center items-center'>
                    <img src={Logo} alt='logo' className='flex object-scale-down  max-h-[90px]' />
                </div>

                <div className='flex w-1/5 justify-center items-center'>
                    <button
                        className='bg-blue-400 rounded-full p-2 hover:bg-blue-600 z-50'
                        onClick={() => setMobileNav(!mobileNav)}
                    >
                        {mobileNav ? <MdClose /> : <RxHamburgerMenu />}
                    </button>
                </div>


            </div>



            <div className={`fixed top-0 right-0 items-end justify-end pl-20 pt-20 bg-black transform ${mobileNav ? 'translate-x-0 h-full' : 'translate-x-full h-0'} transition-transform duration-300 ease-in-out md:hidden`}>
                <ul className='flex flex-col items-end mr-4'>
                    {['about', 'work', 'skills', 'contact'].map((item) => (

                        <li key={item} className='my-2 uppercase text-center  ease-in-out duration-200 hover:bg-gray-400 hover:border-gray-300'>
                            <div />
                            <a onClick={() => (setMobileNav(false))} className='text-base lg:text-xl text-white' href={`#${item}`}>{item}</a>
                        </li>

                    ))}
                </ul>
            </div>




            <div className='flex w-full justify-between sm:hidden'>

                <div className='flex w-1/5 bg-black justify-center items-center'>
                    <img src={Logo} alt='logo' className='flex object-scale-down  max-h-[90px]' />
                </div>



                <ul className='flex w-4/5 bg-black justify-between items-center '>
                    {['about', 'work', 'skills', 'contact'].map((item) => (

                        <li key={`link-${item}`} className='mx-2 my-2 w-full py-1 uppercase text-center  ease-in-out duration-200 hover:bg-gray-700 '>
                            <div />
                            <a onClick={() => (setMobileNav(false))} className='text-base lg:text-xl text-white' href={`#${item}`}>{item}</a>
                        </li>

                    ))}
                </ul>

            </div>


        </div>
    )
}

export default Navbar