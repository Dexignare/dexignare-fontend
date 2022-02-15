import React from "react";
import Button from "../../components/Button";
// import "./index.css";

const Revo = () => {
  return (
    <div
      className="bg-texture bg-no-repeat bg-center bg-cover bg-dark-700 py-20 text-white text-right px-4 my-16 sm:my-24 lg:my-32 mx-auto font-montserrat">
      <p
        className="font-bold text-white text-2xl xxxs:text-{5xl} sm:text-4xl md:text-5xl lg:text-6xl sm:px-4 lg:px-8"
      >
        DDD’22 is a revolution <br/>
        with a unique experience <br/>
        for the Indian design community
      </p>
      <hr
        className="w-3/5 h-1 my-4 mr-0 sm:mr-4 lg:mr-8 sm:my-8 border-none"
        style={{
          // border: 'none',
          borderRadius: '10px',
          // height: '5px',
          background: "linear-gradient(to right, #9130ea, #cb6497, #ff715b)"
        }}
      />
      <p
        className="mt-4 mb-4 sm:px-4 lg:px-8 xxs:text-2xl lg:text-7xl"
      >
        March 20th, 21st, 22nd & 23rd <br/> Online | Conference - Connect - Designathon
      </p>
      <div className="sm:flex sm:justify-end sm:px-8 lg:px-12">
      <Button text="Learn more" link="https://ddd22.devfolio.co"/>
      </div>
    </div>
  );
};

export default Revo;
