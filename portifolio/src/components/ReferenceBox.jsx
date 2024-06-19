import React from 'react'

const ReferenceBox = ({ name, image, link }) => {
    return (
        <div className='cursor-pointer bg-black mx-5 my-3 rounded-lg px-2  min-w-60 border border-white transition hover:scale-110 sm:flex-col'>

            <a href={link} className='flex flex-row justify-between items-center mr-4'>

                <img className='object-contain p-4 h-16'
                    src={image}
                    alt={`${name} logo`} />

                <h2 className='text-center font-semibold font-rubik pb-1 text-wrap text-2xl'>{name}</h2>

            </a>

        </div>
    )
}


export default ReferenceBox