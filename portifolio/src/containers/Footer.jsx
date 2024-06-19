import React from 'react'
import ReferenceBox from '../components/ReferenceBox'
import images from '../assets'
import ContactForm from '../components/ContactForm'
const contacts = { name: 'React', image: images.ReactIcon, github: 'https://react.dev', }
const Footer = () => {
  return (
    <div className=''>

      <h1 className='my-20 font-serif text-5xl sm:text-4xl font-thin uppercase justify-center text-center'>
        Contact
      </h1>

      <div className='flex flex-row sm:flex-col justify-center items-center w-full'>

        <div className='flex flex-col pb-16'>
          <ReferenceBox name='React' image={images.ReactIcon} github={'https://react.dev'} />
          <ReferenceBox name='React' image={images.ReactIcon} github={'https://react.dev'} />
          <ReferenceBox name='React' image={images.ReactIcon} github={'https://react.dev'} />
          <ReferenceBox name='React' image={images.ReactIcon} github={'https://react.dev'} />
        </div>



        <ContactForm />
       
      </div>





    </div >
  )
}

export default Footer
