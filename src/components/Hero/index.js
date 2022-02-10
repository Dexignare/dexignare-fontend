import React from 'react'
import ModalButton from '../../components/ModalButton'
import ScrollButton from './../ScrollButton'

const Hero = () => {
  return (
    <main className='mt-12 mx-auto lg:max-w-8xl px-4 xs:px-12 sm:mt-16 sm:px-6 md:mt-16 lg:mt-16 lg:px-8'>
      <div className='sm:text-center'>
        <h1 className='tracking-tight font-extrabold text-4xl xxxs:text-{5xl} xxs:text-{7xl}  sm:text-6xl lg:text-7xl block text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-magenta-500 to-bittersweet-500 xl:inline leading-normal'>
          Design Development Days <br /> 2022 is here!
        </h1>
        <p className='xxs:text-3xl lg:text-7xl sm:items-center sm:flex justify-center font-montserrat mt-3 text-base text-white sm:mt-5 text-xl sm:max-w-xl sm:mx-auto md:mt-6 '>
          20th - 23rd March
        </p>
        <div className='absolute left-4 right-4 bottom-32 xxs:bottom-28 xs:bottom-36 xxs:my-4'>
          <ModalButton text='Book My Seat' />
        </div>
      </div>
      <p class='text-white font-medium uppercase font-montserrat tracking-tight hover:tracking-widest text-center absolute bottom-16 right-0 left-0 px-4 transition ease-in-out delay-250 duration-300'>
        Turn Imagination into Creativity
      </p>
      <ScrollButton />
    </main>
  )
}

export default Hero
