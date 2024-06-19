import React, { useState, useEffect } from 'react'

const temp =
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultricies at massa id iaculis. Pellentesque egestas, turpis id dictum porttitor, nisi ante feugiat dui, non scelerisque nisi nisi nec nulla. Aliquam vulputate lorem a ipsum interdum, a viverra nibh aliquam. Etiam accumsan blandit justo. Curabitur malesuada suscipit purus mollis aliquet. Vivamus at sapien sed libero sodales efficitur quis id enim. Nunc mauris odio, faucibus ac tortor vitae, maximus ultrices metus. Mauris ac dignissim magna. Vestibulum mauris risus, vestibulum in sodales ac, consectetur sed urna. Mauris ante est, convallis ac feugiat quis, semper vitae massa.`

const About = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-20'>


      <h1 className='my-20 font-serif text-5xl sm:text-4xl font-bold uppercase justify-center text-center'>
        About Me
      </h1>


      <div className='w-[80%] flex items-center justify-center p-8'>
        <p className='text-lg'>
          {temp}
        </p>
      </div>




    </div>
  )
}

export default About
