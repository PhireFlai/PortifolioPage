import React from 'react'

const IconBox = ({ name, image, link }) => {
    return (
        <div>
            <a href={link} className='cursor-pointer'>
                <div className='w-50 h-50 bg-black m-5 rounded-lg min-h-40 min-w-40 flex flex-col justify-center items-center border border-white transition hover:scale-110 '>



                    <div className='flex justify-center items-center w-full h-full'>
                        <img className='object-contain p-4 h-20'
                            src={image}
                            alt={`${name} logo`} />
                    </div>

                    <h2 className='text-center font-semibold font-rubik uppercase pb-1 text-wrap text-lg'>
                        {name}
                    </h2>


                </div>
            </a>

        </div>
    )
}

export default IconBox