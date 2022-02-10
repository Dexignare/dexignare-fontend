import React from "react";
import stock from "../../assets/stock.png";
import "./index.css";

const data = [
  {
    name: "John Doe",
    image: stock,
  },
  {
    name: "John Doe",
    image: stock,
  },
  {
    name: "John Doe",
    image: stock,
  },
  {
    name: "John Doe",
    image: stock,
  },
  {
    name: "John Doe",
    image: stock,
  },
  {
    name: "John Doe",
    image: stock,
  },
  {
    name: "John Doe",
    image: stock,
  },
  {
    name: "John Doe",
    image: stock,
  },
];

const Expert = () => {
  return (
    <div className="text-center">
      <h4 className="tracking-tight font-extrabold text-4xl xxxs:text-{5xl} xxs:text-{7xl}  sm:text-4xl lg:text-4xl block text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-magenta-500 to-bittersweet-500 xl:inline leading-normal">
        DDD'2
      </h4>
      <h2 style={{ color: "white", fontWeight: "700" }} className="text-3xl">
        The experts
      </h2>
      <div className="grid grid-cols-4 gap-4 mt-24">
        {data.map((item, index) => {
          return (
            <div className="text-white" style={{ margin: "auto" }}>
              <div>
                <img
                  className=" gridcol"
                  style={{ backgroundColor: "white" }}
                  src={item.image}
                  alt="nothing"
                />
              </div>
              <p>{item.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Expert;
