import React from 'react'


const EmailBox = ({ name, image, email }) => {

    const handleCopyAndEmail = () => {
        // Copy the email to the clipboard
        navigator.clipboard.writeText(email).then(() => {
          console.log('Email copied to clipboard');
    
          // Open the default email client
          window.location.href = `mailto:${email}`;
        }).catch(err => {
          console.error('Failed to copy email: ', err);
        });
      };

    return (
        <div className='cursor-pointer bg-black mx-5 my-3 rounded-lg px-2  min-w-60 border border-white transition hover:scale-110 sm:flex-col'>

            <div onClick={handleCopyAndEmail} className='flex flex-row justify-between items-center mr-4'>

                <img className='object-contain p-4 h-16'
                    src={image}
                    alt={`${name} logo`} />

                <h2 className='text-center font-semibold font-rubik pb-1 text-wrap text-2xl'>{name}</h2>

            </div>

        </div>
    )
}

export default EmailBox