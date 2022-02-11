import React from "react";
import Button from "../../components/Button";

const Revo = () => {
  return (
    <div
      style={{ color: "white", textAlign: "right" }}
      className="px-4 h-full my-8 sm:my-24 lg:my-32 mx-auto font-montserrat bg-dark-900"
    >
      <p
        className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-magenta-500 to-bittersweet-500 text-2xl xxxs:text-{5xl} sm:text-4xl md:text-5xl lg:text-6xl sm:px-4 lg:px-8"
      >
        DDD’22 is a revolution <br/>
        with a unique experience <br/>
        for the Indian design community
      </p>
      <hr className="h-2 my-4 sm:my-8 lg:mx-16"/>
      <p
        className="mt-4 mb-4 sm:px-8 lg:px-12 xxs:text-3xl lg:text-7xl"
      >
        March 20th, 21st, 22nd & 23rd <br/> Online | Conference - Connect - Designathon
      </p>
      <div className="sm:flex sm:justify-end sm:px-8 lg:px-12">
      <Button text="Learn more" />
      </div>
    </div>
  );
};

export default Revo;
