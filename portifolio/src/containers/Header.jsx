import React, { useEffect, useState } from 'react'
import { MdOutlineWavingHand } from "react-icons/md";
import profPic from '../assets/temp.png'
import background from '../assets/backdrop.gif'


const Header = () => {
  const [onDisplay, setOnDisplay] = useState(false);

  useEffect(() => {

    setOnDisplay(true);

  }, [])


  return (
    <div
      className='flex flex-row sm:flex-col text-gray-900 justify-center items-center bg-cover bg-center bg-fixed py-3'
      style={{ backgroundImage: `url(${background})` }}
    >

      {/* picture */}
      <div className={`flex flex-col transform ease-in-out delay-[600ms] duration-[2000ms]  transition-opacity ${onDisplay ? 'opacity-100' : 'opacity-0'}`}>

        <div className={`w-[500px] h-[500px] sm:w-[150px] sm:h-[150px] rounded-full bg-gray-800 overflow-hidden my-4 mx-5 flex justify-center items-center flex-col transform ${onDisplay ? 'translate-x-0' : '-translate-x-full'} ease-in-out duration-[3000ms]  transition-transform`}>
          <img src={profPic} alt='profile-pic' className='w-full h-full object-cover' />
        </div>

      </div>

      {/* text box */}
      <div className={`flex justify-center items-center flex-col transform ${onDisplay ? 'translate-x-0' : 'translate-x-full'} ease-in-out duration-[3000ms]  transition-transform`}>


        <div className={`transform flex sm:flex-row justify-center items-center text-center font-rubik`}>
          <div className={`p-3 text-white bg-gray-900 rounded-xl shadow-md shadow-neutral-700 flex flex-col transform ease-in-out delay-[600ms] duration-[2000ms]  transition-opacity ${onDisplay ? 'opacity-100' : 'opacity-0'}`}>
            <div>
              <div className='flex justify-center items-center flex-row'>
                <MdOutlineWavingHand className='mr-2' size={30} />
                <p className='text-xl sm:text-lg mt-2'>Hello I am</p>
              </div>

              <h1 className='text-5xl sm:text-xl ml-1'>Yijie Zou</h1>
              <p className='mt-2 text-md sm:text-sm text-center ml-1'>Web App/Software Developer</p>
            </div>
          </div>
        </div>

      </div>




    </div>
  )
}

export default Header
