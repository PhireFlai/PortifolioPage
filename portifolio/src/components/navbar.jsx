import React, { useState } from 'react'
import Logo from '../assets/logo-white.png'
// import { easeIn, easeInOut, motion } from 'framer-motion';
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";




const Navbar = () => {
    const [mobileNav, setMobileNav] = useState(false);
    return (

        // mobile navbar
        <div className='font-roboto'>
            <div className='hidden w-full bg-black justify-between sm:flex fixed z-50'>

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



            {/* mobile navbar */}
            <div className={`fixed top-0 right-0 items-end justify-end pl-20 pt-20 bg-black transform ${mobileNav ? 'translate-x-0 ' : 'translate-x-full '} h-full transition-transform duration-1000 ease-in-out md:hidden z-10`}>
                <ul className='flex flex-col items-end mr-4'>
                    {['about', 'skills', 'work', 'contact'].map((item) => (

                        <li key={item} className='my-2 uppercase text-center hover:bg-gray-400 hover:border-gray-300'>
                            <div />
                            <a onClick={() => (setMobileNav(false))} className='text-base lg:text-xl' href={`#${item}`}>{item}</a>
                        </li>

                    ))}
                </ul>
            </div>




            {/* destktop sidebar */}
            <div className='flex fixed w-full justify-between sm:hidden z-40'>

                <div className='flex w-1/5 bg-black justify-center items-center'>
                    <img src={Logo} alt='logo' className='flex object-scale-down  max-h-[90px]' />
                </div>



                <ul className='flex w-4/5 bg-black justify-between items-center '>
                    {['about', 'skills', 'work', 'contact'].map((item) => (

                        <li key={`link-${item}`} className='mx-2 my-2 w-full py-1 uppercase text-center  ease-in-out duration-200 hover:bg-gray-700 '>
                            <div />
                            <a onClick={() => (setMobileNav(false))} className='text-base lg:text-xl ' href={`#${item}`}>{item}</a>
                        </li>

                    ))}
                </ul>

            </div>


        </div>
    )
}

export default Navbar