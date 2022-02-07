import React from "react";
import Button from "../../components/Button";
import ScrollButton from "./../ScrollButton";
import image1 from "../../assets/dexi.png";
import image2 from "../../assets/cohosted.png";

const Hero = () => {
  return (
    <main className="mt-12 mx-auto md:max-w-7xl lg:max-w-7xl px-4 sm:mt-20 sm:px-6 md:mt-20 lg:mt-24 lg:px-8">
      <div className="sm:text-center">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 text-600 xxs:text-5xl xs:text-5xl sm:font-8xl">
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-magenta-500 to-bittersweet-500 xl:inline leading-normal">
            Design Development Days <br /> 2022 is here!
          </span>
        </h1>

        <p className="xxs:text-3xl sm:text-7xl sm:items-center sm:flex justify-center font-montserrat mt-3 text-base text-white sm:mt-5 text-xl sm:max-w-xl sm:mx-auto md:mt-6 ">
          20th - 23rd March
        </p>
        <div className="flex">
          <img style={{ margin: "auto" }} src={image1} alt="image" />
          <img style={{ margin: "auto" }} src={image2} alt="image" />
        </div>
        <div className="xxs:my-8">
          <Button text="Book My Seat" />
        </div>
      </div>
      <p class="text-white font-thin uppercase font-montserrat tracking-wider text-center absolute bottom-20 sm:bottom-16 right-0 left-0 px-4">
        Turn your Creativity into reality
      </p>
      <ScrollButton />
    </main>
  );
};

export default Hero;
