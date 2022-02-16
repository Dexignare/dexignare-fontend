import React from 'react'
import LogoCloud from "../../components/LogoCloud";
import Devfolio from '../../assets/partners/devfolio.png'
import Polygon from '../../assets/partners/polygon.png'
import Tezos from '../../assets/partners/tezos.png'
import Celo from '../../assets/partners/celo.png'
import Filecoin from '../../assets/partners/filecoin.png'

const Sponsors = () => {
  return (
    <div id="sponsors">
      <div className='px-4 md:px-8 my-16 sm:my-24 lg:my-32'>
        <h4 className='text-center tracking-tight font-extrabold text-4xl xxxs:text-{5xl} xxs:text-{7xl}  sm:text-4xl lg:text-4xl block text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-magenta-500 to-bittersweet-500 leading-normal font-montserrat'>
          DDD'22
        </h4>
        <h2 className='text-center text-5xl text-white font-bold mb-12'>
          Sponsors
        </h2>
        <div className=''>
          <LogoCloud
            name="Devflio"
            imgsrc={Devfolio}
            link="https://devfolio.co"
          />

          <div className="px-4 md:px-8 my-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <LogoCloud
            name="Polygon"
            imgsrc={Polygon}
            link="https://polygon.technology"
          />
          <LogoCloud
            name="Tezos"
            imgsrc={Tezos}
            link="https://tezos.com"
          />
          <LogoCloud
            name="Celo"
            imgsrc={Celo}
            link="https://celo.org"
          />
          <LogoCloud
            name="Filecoin"
            imgsrc={Filecoin}
            link="https://filecoin.io"
          />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sponsors
