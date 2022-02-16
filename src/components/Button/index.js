// import { Fragment, useState } from 'react'


const Button = ({ text, link }) => {

  return (
    <div className='mt-5 sm:mt-8 sm:flex justify-center '>
        <div className='transition ease-in-out delay-50 duration-200 hover:scale-105 p-0.5 bg-gradient-to-l from-magenta-500 via-fuchsia-500 to-violet-500 rounded-tl-xl rounded-br-xl '>
          <div className='rounded-tl-xl rounded-br-xl shadow'>
            <a
              type='button'
              href={link}
              target="_blank" rel="noopener noreferrer"
              className='w-full bg-black hover:bg-dark-700 flex items-center justify-center px-12 py-3 border border-transparent text-base font-medium rounded-tl-xl rounded-br-xl text-white border-2 md:py-4 md:text-lg md:px-16 font-montserrat'
            >
              {text}
            </a>
          </div>
        </div>
      </div>

  )
}

export default Button
