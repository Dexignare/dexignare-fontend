import React from "react";
import stock from "../../assets/stock.png";
import expert1 from "../../assets/experts/garima.jpeg";
import expert2 from "../../assets/experts/rushab.jpeg";
import expert3 from "../../assets/experts/siddhant.jpg";
import expert4 from "../../assets/experts/pankaj.jpg";
import "./index.css";
import Card from "../../components/Card";

const data = [
  {
    name: "Garima Mehta",
    pos: "CEO, Adobe",
    image: expert1,
    linkedin: "https://www.linkedin.com/in/qalamkaari-garima/"
  },
  {
    name: "Rushab Kataria",
    pos: "CEO, Adobe",
    image: expert2,
    linkedin: "https://www.linkedin.com/in/rushabk/"
  },
  {
    name: "Siddhant Singh",
    pos: "CEO, Adobe",
    image: expert3,
    linkedin: "https://www.linkedin.com/in/simply-siddhant-singh/"
  },
  {
    name: "Pankaj Kumar",
    pos: "CEO, Adobe",
    image: expert4,
    linkedin: "https://www.linkedin.com/in/pankaj-parmar-41663653/"
  },
];

const Expert = () => {
  return (
    <div id="speakers" className="text-center my-16 sm:my-24 lg:my-32">
      <h4 className="tracking-tight font-extrabold text-4xl xxxs:text-{5xl} xxs:text-{7xl}  sm:text-4xl lg:text-4xl block text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-magenta-500 to-bittersweet-500 xl:inline leading-normal font-montserrat">
        DDD'22
      </h4>
      <h2 className="text-5xl text-white font-bold mb-12">
        The Experts
      </h2>

      {/* <div className="grid grid-cols-1 mx-8 sm:grid-cols-2 lg:grid-cols-4 gap-4 place-items-center"> */}

      {/* <div className="flex flex-col sm:flex-row mx-8 justify-evenly place-items-center"> */}

      <div className="grid grid-cols-1 mx-8 sm:grid-cols-2 lg:grid-cols-4 gap-4 place-items-center">
        {data.map((data, index) => {
          return (
            <Card img={data.image} name={data.name} pos={data.pos} social={data.linkedin}/>
          );
        })}
      </div>
    </div>
  );
};

export default Expert;
