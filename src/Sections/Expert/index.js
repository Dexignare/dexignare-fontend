import React from "react";
import stock from "../../assets/stock.png";
import "./index.css";
import Card from "../../components/Card";

const data = [
  {
    name: "John Doe",
    pos: "CEO, Adobe",
    image: stock,
  },
  {
    name: "John Doe",
    pos: "CEO, Adobe",
    image: stock,
  },
  {
    name: "John Doe",
    pos: "CEO, Adobe",
    image: stock,
  },
  {
    name: "John Doe",
    pos: "CEO, Adobe",
    image: stock,
  },
  {
    name: "John Doe",
    pos: "CEO, Adobe",
    image: stock,
  },
  {
    name: "John Doe",
    pos: "CEO, Adobe",
    image: stock,
  },
  {
    name: "John Doe",
    pos: "CEO, Adobe",
    image: stock,
  },
  {
    name: "John Doe",
    pos: "CEO, Adobe",
    image: stock,
  },
];

const Expert = () => {
  return (
    <div id="speakers" className="text-center">
      <h4 className="tracking-tight font-extrabold text-4xl xxxs:text-{5xl} xxs:text-{7xl}  sm:text-4xl lg:text-4xl block text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-magenta-500 to-bittersweet-500 xl:inline leading-normal font-montserrat">
        DDD'22
      </h4>
      <h2 className="text-5xl text-white font-bold mb-12">
        The Experts
      </h2>

      <div className="grid grid-cols-1 mx-8 sm:grid-cols-4 lg:grid-cols-6 gap-4 place-items-center">
        {data.map((data, index) => {
          return (
            <Card img={data.image} name={data.name} pos={data.pos}/>
          );
        })}
      </div>
    </div>
  );
};

export default Expert;
