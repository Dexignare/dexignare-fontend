import React from 'react'

const LogoCloud = ({ name, imgsrc, link }) => {
  return (
    <div className='mt-4 sm:mt-8 flex justify-center '>
      {/* <div className='transition ease-in-out delay-50 hover:scale-105 duration-200 p-0.5 bg-gradient-to-l from-magenta-500 via-fuchsia-500 to-violet-500 rounded-tl-xl rounded-br-xl '>
          <div className='rounded-tl-xl rounded-br-xl shadow'>
            <a
              type='button'
              href={link}
              target="_blank" rel="noopener noreferrer"
              className='bg-black hover:bg-dark-700 flex items-center justify-center px-12 py-3 border border-transparent text-base font-medium rounded-tl-xl rounded-br-xl text-white border-2 md:py-4 md:text-lg md:px-16 font-montserrat'
            > */}
      <a className="sm:-my-6 md:-my-12" type='button' href={link} target='_blank' rel='noopener noreferrer'>
        <img
          className='sm:my-8 mx-auto h-4/5 sm:h-1/2 md:h-2/5'
          src={imgsrc}
          alt={name}
        />
      </a>
      {/* </a>
          </div>
        </div> */}
    </div>
  )
}

export default LogoCloud
