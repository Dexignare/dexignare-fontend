import React from "react";
import "./index.css";

const data = [
  {
    Day: "Day 1",
    Date: "20th March",
    time1: "7:00 pm",
    title1: "Keynote by Dexignare",
    time2: "7:30 pm",
    title2: "Panel Discussion: Metaverse- A Dream to the Virtual World",
    time3: "8:15 pm",
    title3: "Announcement: Dexignathon",
  },
  {
    Day: "Day 2",
    Date: "21st March",
    time1: "7:00 pm",
    title1: "Build an A class Case Study",
    time2: "7:30 pm",
    title2: "Branding for the Digital World",
    time3: "8:15 pm",
    title3: "Mini-event by #Raahee",
  },
  {
    Day: "Day 3",
    Date: "22nd March",
    time1: "7:00 pm",
    title1: "Workshop: Spark AR",
    time2: "7:30 pm",
    title2: "Design the Metaverse & NFT",
    time3: "8:15 pm",
    title3: "Mini event by #peoplewho.code",
  },

  {
    Day: "Day 4",
    Date: "23rd March",
    time1: "7:00 pm",
    title1: "Think UX-The voice of the Product ",
    time2: "7:30 pm",
    title2: "The D3 Talk",
    time3: "8:15 pm",
    title3: "Dexignathon: Winner Announcement",
  },
];

const Agenda = () => {
  return (
    <div
      id="agenda"
      className="md:px-8">
      <h4 className=" text-center tracking-tight font-extrabold text-4xl xxxs:text-{5xl} xxs:text-{7xl}  sm:text-4xl lg:text-4xl block text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-magenta-500 to-bittersweet-500 leading-normal font-montserrat">
        DDD'22
      </h4>
      <h2 className="text-center text-5xl text-white font-bold mb-12">
        Agenda
      </h2>
      {data.map((data, index) => {
        return (
          <div className="rectangle mx-auto text-white" >
            <div style={{ fontSize: "1.75rem" }} className="mb-8 flex justify-between">
              <span
                style={{ fontWeight: "800" }}
                className="flex tracking-tight xxxs:text-{5xl} xxs:text-{7xl}  sm:text-4xl lg:text-4xl block  xl:inline leading-normal font-montserrat"
              >
                {data.Day}
              </span>
              <span className="tracking-tight font-extrabold xxxs:text-{5xl} xxs:text-{7xl} sm:text-4xl lg:text-4xl block text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-magenta-500 to-bittersweet-500 xl:inline leading-normal font-montserrat">
                {data.Date}
              </span>
            </div>

{/* date */}
            <div className=" flex justify-between">
              <div>
                <span
                  // style={{ marginLeft: "15px" }}
                  className="tracking-tight font-extrabold block text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-magenta-500 to-bittersweet-500 xl:inline leading-normal font-montserrat"
                >
                  {data.time1}
                </span>
              </div>
              <div>
                <span
                  // style={{ marginLeft: "30%" }}
                  className="tracking-tight font-extrabold block text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-magenta-500 to-bittersweet-500 xl:inline leading-normal font-montserrat"
                >
                  {data.time2}
                </span>
              </div>
              <div>
                <span
                  className=" tracking-tight font-extrabold block text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-magenta-500 to-bittersweet-500 xl:inline leading-normal font-montserrat"
                >
                  {data.time3}
                </span>
              </div>
            </div>

            <div style={{ color: "white", display: "flex", margin: "25px 10px" }}>
              <span className="circle"></span>
              <hr />
              <span className="circle"></span>
              <hr />
              <span className="circle"></span>
            </div>

            <div className="flex justify-between">
              <div>
                <div className="mr-[20%] text-white font-montserrat mt-2 font-bold leading-tight"
                  // style={{ marginLeft: "15px" }}
                >
                  {data.title1}
                </div>
              </div>
              <div>
                <div
                  className="ml-[10%] mr-[10%] xs:ml-[25%] xs:mr-[10%] text-center  text-white font-montserrat mt-2 font-bold leading-tight"
                  // style={{ marginLeft: "30%" }}
                >
                  {data.title2}
                </div>
              </div>
              <div>
                <div className="ml-[10%] text-right sm:ml-[40%] text-white font-montserrat mt-2 font-bold leading-tight"
                >
                  {data.title3}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Agenda;
