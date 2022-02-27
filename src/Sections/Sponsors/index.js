// import React from 'react'
import LogoCloud from '../../components/LogoCloud'
import Figma from '../../assets/partners/figma.png'
import Title from '../../assets/partners/title.png'
import Devfolio from '../../assets/partners/devfolio.png'
import Polygon from '../../assets/partners/polygon.png'
import Tezos from '../../assets/partners/tezos.png'
import Celo from '../../assets/partners/celo.png'
import Filecoin from '../../assets/partners/filecoin.png'

const Sponsors = () => {
  return (
    <div id='sponsors'>
      <div className='px-4 md:px-8 my-16 sm:my-28 sm:mb-16'>
        <h4 className='text-center tracking-tight font-extrabold text-4xl xxxs:text-{5xl} xxs:text-{7xl}  sm:text-4xl lg:text-4xl block text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-magenta-500 to-bittersweet-500 leading-normal font-montserrat'>
          DDD'22
        </h4>
        <h2 className='text-center text-5xl text-white font-bold mb-12'>
          Sponsors
        </h2>
        <div className='flex-col justify-center'>
          <div className='my-8 sm:my-12 flex justify-center'>
            <img src={Title} alt='' />
          </div>

          <div className='xxs:text-xl lg:text-5xl font-montserrat flex justify-center text-light-600 lg:text-left'>
            Title Sponsors
          </div>
          <div className='my-8 sm:mb-12 h-32 flex justify-center'>
            <a
              type='button'
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.figma.com/'
            >
              <img className='h-32' src={Figma} alt='' />
            </a>
          </div>

          <div className='xxs:text-xl lg:text-5xl font-montserrat flex justify-center text-light-600 lg:text-left'>
            Associate Sponsors
          </div>
          <div className='px-4 md:px-8 grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <LogoCloud
              name='Devfolio'
              imgsrc={Devfolio}
              link='https://devfolio.co'
            />

            <LogoCloud
              name='Polygon'
              imgsrc={Polygon}
              link='https://polygon.technology'
            />
          </div>

          <div className='flex flex-col my-4 '>
            <div className='xxs:text-xl lg:text-5xl font-montserrat flex justify-center text-light-600 lg:text-left'>
              Diamond Sponsors
            </div>
            <div className='px-4 md:px-8 grid grid-cols-1 sm:grid-cols-3 gap-4'>
              <LogoCloud name='Tezos' imgsrc={Tezos} link='https://tezos.com' />
              <LogoCloud name='Celo' imgsrc={Celo} link='https://celo.org' />
              <LogoCloud
                name='Filecoin'
                imgsrc={Filecoin}
                link='https://filecoin.io'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sponsors
