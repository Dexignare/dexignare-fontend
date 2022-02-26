// import React from 'react'
import LogoCloud from "../../components/LogoCloud";
import Devfolio from "../../assets/partners/devfolio.png";
import Dexi from "../../assets/partners/Dexi.png";
import Code from "../../assets/partners/Code.png";
import Polygon from "../../assets/partners/polygon.png";
import Tezos from "../../assets/partners/tezos.png";
import Celo from "../../assets/partners/celo.png";
import Filecoin from "../../assets/partners/filecoin.png";

const Sponsors = () => {
  return (
    <div id="sponsors">
      <div className="px-4 md:px-8 my-16 sm:my-28 lg:my-32">
        <h4 className="text-center tracking-tight font-extrabold text-4xl xxxs:text-{5xl} xxs:text-{7xl}  sm:text-4xl lg:text-4xl block text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-magenta-500 to-bittersweet-500 leading-normal font-montserrat">
          DDD'22
        </h4>
        <h2 className="text-center text-5xl text-white font-bold mb-12">
          Sponsors
        </h2>
        <div className="justify-center">
          <div>
            <h2 className="text-white text-center font-bold text-2xl">
              Title Sponsor
            </h2>
            <div
              style={{ margin: "auto", justifyContent: "center" }}
              className="flex"
            >
              <LogoCloud
                name="Dexi"
                imgsrc={Dexi}
                link="https://ddd.dexignare.in/"
              />
              <LogoCloud
                name="People"
                imgsrc={Code}
                link="https://peoplewho.codes/"
              />
            </div>
          </div>
          <div>
            <h2 className="text-white text-center font-bold text-2xl">
              Associate Sponsors
            </h2>
            <div
              style={{ margin: "auto", justifyContent: "center" }}
              className="flex"
            >
              <LogoCloud
                name="Devflio"
                imgsrc={Devfolio}
                link="https://devfolio.co/"
              />
              <LogoCloud
                name="Polygon"
                imgsrc={Polygon}
                link="https://www.polygon.com/"
              />
            </div>
          </div>
          <div>
            <h2 className="text-white text-center font-bold text-2xl">
              Diamond Sponsor
            </h2>
            <div
              style={{ margin: "auto", justifyContent: "center" }}
              className="flex"
            >
              <LogoCloud
                name="Tezos"
                imgsrc={Tezos}
                link="https://tezos.com/"
              />
              <LogoCloud name="Celo" imgsrc={Celo} link="https://celo.org/" />
              <LogoCloud
                name="FileCoin"
                imgsrc={Filecoin}
                link="https://filecoin.io/"
              />
            </div>
          </div>
        </div>

        {/* <div className='flex-col justify-center'>
          <div className="px-4 md:px-8 my-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <LogoCloud
            name="Devflio"
            imgsrc={Devfolio}
            link="https://devfolio.co"
          />

          <LogoCloud
            name="Polygon"
            imgsrc={Polygon}
            link="https://polygon.technology"
          />

          </div>

          <div className="px-4 md:px-8 my-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
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
        </div> */}
      </div>
    </div>
  );
};

export default Sponsors;
