import React, { useState, useEffect } from 'react'
import IconBox from '../components/IconBox'
import images from '../assets/'

const icons = [
  { name: 'React', image: images.ReactIcon, link: 'https://react.dev' },
  { name: 'Javascript', image: images.JsIcon, link: 'https://www.javascript.com' },
  { name: 'Tailwind', image: images.TailwindIcon, link: 'https://tailwindcss.com' },
  { name: 'Git', image: images.GitIcon, link: 'https://www.git-scm.com' },
  { name: 'MongoDB', image: images.MongoDBIcon, link: 'https://www.mongodb.com' },
  { name: 'python', image: images.PythonIcon, link: 'https://www.python.org' },
  { name: 'C', image: images.CIcon, link: 'https://www.learn-c.org' },
  { name: 'C++', image: images.CppIcon,  link: 'https://isocpp.org' },
  { name: 'Android Studio', image: images.AndroidStudioIcon, link: 'https://developer.android.com/studio' },
  { name: 'Firebase', image: images.FireBaseIcon, link: 'https://firebase.google.com' },




];

const Skills = () => {
  return (
    <div className=' flex justify-center items-center font-bold mt-20 '>


      <div className='w-[60%]'>
        <h1 className='my-20 font-serif text-5xl sm:text-4xl font-bold  uppercase justify-center text-center'>
          Skills
        </h1>

        <div className='flex flex-row flex-wrap sm:grid-cols-1 justify-center items-center'>
          {icons.map((icon, index) => (
            <IconBox
              key={index}
              name={icon.name}
              image={icon.image}
              link={icon.link}
            />
          ))}
        </div>

      </div>

    </div>
  );
};


export default Skills