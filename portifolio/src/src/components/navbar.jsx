import React from 'react'
import Logo from '../assets/logo.png'


const Navbar = () => {
  return (
    <div>
        <div className='w-96 bg-black'>
            <img src={Logo} alt='logo' className='flex object-scale-down h-48'/>
        </div>

        <ul className='bg-black'>
            {['about', 'work', 'skills', 'contact'].map((item)=>(
                <li key={`link-${item}`}>
                    <div />
                    <a href={`#${item}`}>{item}</a>
                </li>
            ))}
        </ul>

    </div>
  )
}

export default Navbar