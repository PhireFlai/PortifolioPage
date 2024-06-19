import React from 'react'
import ReferenceBox from '../components/ReferenceBox'
import images from '../assets'
import ContactForm from '../components/ContactForm'
import EmailBox from '../components/EmailBox';
const contacts = [
  { name: 'GitHub', image: images.GitHubIcon, link: 'https://github.com/PhireFlai', },
  { name: 'Indeed', image: images.LinkedInIcon, link: 'https://www.linkedin.com/in/yijie-zou-a82203220', },
 ,
];

const email =  { name: 'Email', image: images.GmailIcon, email: 'yijiezou2004@gmail.com', }
const Contact = () => {
  return (
    <div className='pb-20'>

      <h1 className=' my-20 font-serif text-5xl sm:text-4xl font-bold  uppercase justify-center text-center'>
        Contact
      </h1>

      <div className='flex flex-row sm:flex-col justify-center items-center w-full'>

        <div className='flex flex-col pb-16'>
          {contacts.map((item, index) => (
            <ReferenceBox 
            key={index}
            name={item.name}
            image={item.image}
            link={item.link}
            />
          ))}
          <EmailBox  name='Email' image={images.GmailIcon} email='https://react.dev'/>
        </div>

        <ContactForm />
       
      </div>

    </div>
  )
}

export default Contact
