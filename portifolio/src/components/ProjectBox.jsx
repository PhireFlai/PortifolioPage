import React from 'react'

const ProjectBox = ({ name, image, detail, github, site }) => {
    return (
        <div className=' w-[500px] h-60 bg-black m-5 rounded-lg p-2 min-w-[400px] min-h-60 border border-white transition hover:scale-110 sm:flex-col'>

            <div className='flex flex-row'>

                <div className='pt-4 flex-grow h-40'>
                    <h2 className='text-center font-semibold font-rubik uppercase text-wrap text-lg'>{name}</h2>
                    <p className='font-rubik pt-2 text-wrap text-start ml-4 text-xs max-w-60'>{detail}</p>
                </div>

                <div className='flex justify-center items-center'>
                    <div className='flex items-center justify-center w-full h-full'>
                        <img className='object-contain p-4 h-40'
                            src={image}
                            alt={`${name} logo`} />
                    </div>
                </div>


            </div>

            <div className='flex justify-end pl-4 pt-5'>
                {github && <a
                    href={github}>
                    <button className='border p-1 mr-2 px-2 rounded-lg text-black bg-blue-500 text-sm font-rubik font-thin transition hover:scale-110 hover:shadow-sm hover:shadow-white'>
                        Code
                    </button>
                </a>
                }


                {site && <a
                    href={github}>
                    <button className='border p-1 mr-2 px-2 rounded-lg text-black bg-blue-500 text-sm font-rubik font-thin transition hover:scale-110 hover:shadow-sm hover:shadow-white'>
                        View Site
                    </button>
                </a>
                }


            </div>


        </div >
    )
}

export default ProjectBox