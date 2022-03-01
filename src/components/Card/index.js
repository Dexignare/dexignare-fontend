import React from 'react'

const Card = ({ name, pos, img, social }) => {
  return (
    <a
      href={social}
      target='_blank'
      rel='noopener noreferrer'
    >
      <div className='w-56 overflow-hidden bg-dark-500 mb-8 flex flex-col items-center'>
        <img
          className='h-56 w-56 object-cover gridcol'
          src={img}
          alt='experts'
        />
        <div className='py-2'>
          <p className='text-white font-montserrat mt-2 font-bold text-lg leading-tight truncate'>
            {name}
          </p>
          <div className='mb-2'>
            <span className='text-light-300 text-md'>{pos}</span>
          </div>
        </div>
      </div>
    </a>
  )
}

export default Card
