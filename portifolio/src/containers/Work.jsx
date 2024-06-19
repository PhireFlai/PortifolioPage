import React from 'react'
import images from '../assets/'
import ProjectBox from '../components/ProjectBox';

const projects = [
  { name: 'React', image: images.ReactIcon, github: 'https://react.dev', site:"google.ca"},
  { name: 'React', image: images.ReactIcon, github: 'https://react.dev', site:"google.ca"},
  { name: 'React', image: images.ReactIcon, github: 'https://react.dev', site:"google.ca"},
  { name: 'React', image: images.ReactIcon, github: 'https://react.dev', site:"google.ca"},
  { name: 'React', image: images.ReactIcon, github: 'https://react.dev',},

]
const Work = () => {
  return (
    <div className=' flex justify-center items-center font-bold mt-20 '>
      <div className='w-[90%]'>
        <h1 className='my-20 font-serif text-5xl sm:text-4xl font-thin uppercase justify-center text-center'>
          Projects
        </h1>

        <div className='flex flex-row flex-wrap sm:grid-cols-1 justify-center items-center'>
          {projects.map((project, index) => (
            <ProjectBox
              key={index}
              name={project.name}
              image={project.image}
              github={project.github}
              site={project.site}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Work