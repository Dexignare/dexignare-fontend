import React from 'react'
import './index.css'
import ddd from '../../assets/DDD.svg'

const Footer = () => {
  return (
    <footer className='bg-dark-700 font-montserrat text-center lg:text-left text-white-600'>
      <div className='flex  bg-dark-900 justify-center items-center lg:justify-between p-6'>
        <div className='px-4 hidden lg:block'>
          <span>Get connected with us on social networks:</span>
        </div>
        <div className='flex justify-center'>
          <a
            href='https://www.facebook.com/dexignare/'
            target='_blank'
            rel='noopener noreferrer'
            className='
          hover:scale-125 mx-4 text-white-600'
          >
            <svg
              aria-hidden='true'
              focusable='false'
              data-prefix='fab'
              data-icon='facebook-f'
              className='w-4'
              role='img'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 320 512'
            >
              <path
                fill='currentColor'
                d='M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z'
              ></path>
            </svg>
          </a>
          <a
            href='https://twitter.com/dexignare'
            target='_blank'
            rel='noopener noreferrer'
            className='
          hover:scale-125 mx-4 text-white-600'
          >
            <svg
              aria-hidden='true'
              focusable='false'
              data-prefix='fab'
              data-icon='twitter'
              className='w-6'
              role='img'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 512 512'
            >
              <path
                fill='currentColor'
                d='M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z'
              ></path>
            </svg>
          </a>
          <a
            href='https://www.instagram.com/dexignare/'
            target='_blank'
            rel='noopener noreferrer'
            className='
          hover:scale-125 mx-4 text-white-600'
          >
            <svg
              aria-hidden='true'
              focusable='false'
              data-prefix='fab'
              data-icon='instagram'
              className='w-6'
              role='img'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 448 512'
            >
              <path
                fill='currentColor'
                d='M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z'
              ></path>
            </svg>
          </a>
          <a
            href='https://in.linkedin.com/company/dexignare-com'
            target='_blank'
            rel='noopener noreferrer'
            className='
          hover:scale-125 mx-4 text-white-600'
          >
            <svg
              aria-hidden='true'
              focusable='false'
              data-prefix='fab'
              data-icon='linkedin-in'
              className='w-6'
              role='img'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 448 512'
            >
              <path
                fill='currentColor'
                d='M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z'
              ></path>
            </svg>
          </a>
          <a
            href='https://discord.gg/3fMh4nykBe'
            target='_blank'
            rel='noopener noreferrer'
            className='
          hover:scale-125 mx-4 text-white-600'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              x='0px'
              y='0px'
              width='30'
              height='30'
              viewBox='0 0 50 50'
              fill='currentColor'
            >
              <path d='M42.298,11.65c-0.676-1.021-1.633-1.802-2.768-2.256c-2.464-0.988-4.583-1.648-6.479-2.02	C31.721,7.114,30.404,7.768,29.771,9l-0.158,0.308c-1.404-0.155-2.895-0.207-4.593-0.164c-1.741-0.042-3.237,0.009-4.643,0.164	L20.22,9c-0.633-1.232-1.952-1.885-3.279-1.625c-1.896,0.371-4.016,1.031-6.479,2.02c-1.134,0.454-2.091,1.234-2.768,2.256	c-4.721,7.131-6.571,14.823-5.655,23.517c0.032,0.305,0.202,0.578,0.461,0.741c3.632,2.29,6.775,3.858,9.891,4.936	c1.303,0.455,2.748-0.054,3.517-1.229l1.371-2.101c-1.092-0.412-2.158-0.9-3.18-1.483c-0.479-0.273-0.646-0.884-0.373-1.363	c0.273-0.481,0.884-0.65,1.364-0.373c3.041,1.734,6.479,2.651,9.942,2.651s6.901-0.917,9.942-2.651	c0.479-0.277,1.09-0.108,1.364,0.373c0.273,0.479,0.106,1.09-0.373,1.363c-1.056,0.603-2.16,1.105-3.291,1.524l1.411,2.102	c0.581,0.865,1.54,1.357,2.528,1.357c0.322,0,0.647-0.053,0.963-0.161c3.125-1.079,6.274-2.649,9.914-4.944	c0.259-0.163,0.429-0.437,0.461-0.741C48.869,26.474,47.019,18.781,42.298,11.65z M18.608,28.983c-1.926,0-3.511-2.029-3.511-4.495	c0-2.466,1.585-4.495,3.511-4.495s3.511,2.029,3.511,4.495C22.119,26.954,20.534,28.983,18.608,28.983z M31.601,28.957	c-1.908,0-3.478-2.041-3.478-4.522s1.57-4.522,3.478-4.522c1.908,0,3.478,2.041,3.478,4.522S33.509,28.957,31.601,28.957z'></path>
            </svg>
          </a>
        </div>
      </div>
      <hr
        className='w-full'
        style={{
          border: 'none',
          borderRadius: '10px',
          height: '2px',
          background: 'linear-gradient(to right, #9130ea, #cb6497, #ff715b)',
        }}
      />
      <div className='mx-6 py-10 text-center md:text-left'>
        <div className='grid grid-1 md:grid-cols-2 lg:grid-cols-3 gap-20'>
          <div className='head'>
            <h6
              className='
            uppercase
            font-semibold
            mb-4
            flex
            items-center
            justify-center
            md:justify-start
          '
            >
              <img src={ddd} alt='ddd' />
            </h6>
            <p>
              An inititatve built by, built for & built with the growing
              community of designers, digital creators, enthusiastic learners
              and tech developers. Design Development Days is an initiative by
              Dexignare.
            </p>
          </div>
          <div className='Contact'>
            <h6 className='uppercase font-semibold mb-4 flex justify-center md:justify-start'>
              Contact Us
            </h6>
            <p className='flex-col items-center justify-center md:justify-start mb-4'>
              For Sponsorship Queries- <br />
              <a
                href='mailto:partners@dexignare.in'
                target='_blank'
                rel='noopener noreferrer'
              >
                partners@dexignare.in
              </a>
            </p>
            <p className='flex-col items-center justify-center md:justify-start mb-4'>
              For General Queries- <br />
              <a
                href='mailto:hello@dexignare.in'
                target='_blank'
                rel='noopener noreferrer'
              >
                hello@dexignare.in
              </a>
            </p>
          </div>
          <div className='More'>
            <h6 className='uppercase font-semibold mb-4 flex justify-center md:justify-start'>
              More
            </h6>
            <p className='mb-4'>
              <a href='#!' target="_blank" rel="noopener noreferrer" className='text-white-600 cursor-none'>
                Team
              </a>
            </p>
            <p className='mb-4'>
              <a href='https://medium.com/dexignare' target="_blank" rel="noopener noreferrer" className='text-white-600'>
                Blog
              </a>
            </p>
            <p className='mb-4'>
              <a href='#!' target="_blank" rel="noopener noreferrer" className='text-white-600 cursor-none'>
                Prizes
              </a>
            </p>
            <p>
              <a href='#!' target="_blank" rel="noopener noreferrer" className='text-white-600'>
                Become an Ambassador
              </a>
            </p>
          </div>
        </div>
      </div>
      <hr
        className='w-full'
        style={{
          border: 'none',
          borderRadius: '10px',
          height: '2px',
          background: 'linear-gradient(to right, #9130ea, #cb6497, #ff715b)',
        }}
      />
      <div className='bg-dark-900 md:justify-between flex py-6 md:px-12 bg-black-200 flex-col  md:flex-row md:justify-between'>
        <p className='font-montserrat'>
          ALL RIGHTS RESERVED | © 2021 -2022 DEXIGNARE
        </p>
        <p className='font-montserrat flex justify-center'>
          BUILT WITH{' '}
          <svg
            style={{ color: 'red', fill: 'red' }}
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
            />
          </svg>{' '}
          <span className=' text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-magenta-500 to-bittersweet-500 xl:inline leading-normal font-montserrat'>
            BY TEAM DDD’22
          </span>
        </p>
      </div>
    </footer>
  )
}

export default Footer
