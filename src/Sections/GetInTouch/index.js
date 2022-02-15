import React from 'react'
import Button from '../../components/Button'

const GetInTouch = () => {
  return (
    <div className='bg-texture bg-no-repeat bg-center bg-cover bg-dark-700 py-20 text-white text-left px-4 mx-auto font-montserrat flex flex-col md:flex-row md:justify-between'>
      <div className=''>
        <p className='font-bold text-white text-2xl xxxs:text-{5xl} sm:text-4xl lg:text-5xl xl:text-6xl sm:px-4 lg:px-8'>
          Become a conference partner
        </p>
        <p className='mt-4 mb-4 sm:px-4 lg:px-8 xxs:text-xl lg:text-5xl max-w-700'>
          We offer a range of dynamic conference partnership opportunities
          tailored to highlight your company and help you connect to the
          creative minds in design & development industry.
        </p>
      </div>
      <div className='items-center md:mb-8 sm:flex sm:justify-start sm:px-8 lg:px-12'>
        <Button text='Get In Touch' link="https://in.linkedin.com/company/dexignare-com"/>
      </div>
    </div>
  )
}

export default GetInTouch
