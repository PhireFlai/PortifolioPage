import React, { useEffect, useState } from 'react'
import { MdOutlineWavingHand } from "react-icons/md";
import profPic from '../assets/temp.png'


const Header = () => {
  const [onDisplay, setOnDisplay] = useState(false);

  useEffect(() => {

    setOnDisplay(true);

  }, [])


  return (
    <div className='flex flex-row bg-gray-600 text-gray-100 justify-center items-center'>

      <div className={`flex justify-center items-center flex-col transform ${onDisplay ? 'translate-x-0' : '-translate-x-full'} ease-in-out duration-[3000ms]  transition-transform`}>


        <div className={`transform flex justify-center items-center text-center`}>
          <div className={`flex flex-col transform ease-in-out delay-[600ms] duration-[2000ms]  transition-opacity ${onDisplay ? 'opacity-100' : 'opacity-0'}`}>

            <div className='flex justify-center items-center flex-row'>
              <MdOutlineWavingHand className=' mr-2' size={30} />
              <p className='text-xl'>Hello I am</p>
            </div>

            <h1 className='text-5xl ml-1'>Yijie Zou</h1>
            <p className='mt-2 items-center text-center ml-1'>Web App/Software Developer</p>

          </div>
        </div>

      </div>

      <div className={`flex flex-col transform ease-in-out delay-[600ms] duration-[2000ms]  transition-opacity ${onDisplay ? 'opacity-100' : 'opacity-0'}`}>

        <div className={`w-[400px] h-[400px] sm:w-[200px] sm:h-[200px] rounded-full bg-gray-800 overflow-hidden my-4 mx-5 flex justify-center items-center flex-col transform ${onDisplay ? 'translate-x-0' : 'translate-x-full'} ease-in-out duration-[3000ms]  transition-transform`}>
          <img src={profPic} alt='profile-pic' className='w-full h-full object-cover' />
        </div>

      </div>

    </div>
  )
}

export default Header
