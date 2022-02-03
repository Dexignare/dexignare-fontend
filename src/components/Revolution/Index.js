import React from "react";
import Button from "../Button";

const Revo = () => {
  return (
    <div
      style={{ color: "white", textAlign: "right" }}
      className="h-full mx-auto font-montserrat md:max-w-7xl lg:max-w-7xl px-4 sm:px-6  lg:px-8 bg-dark-900"
    >
      <p
        style={{
          color: "White",
          fontWeight: "700",
          fontSize: "2.85rem",
        }}
      >
        DDD’22 is a revolution with
        <br /> an unique experience for the <br /> indian design community
      </p>
      <hr />
      <p
        className="mt-4"
        style={{ fontSize: "1.25rem", fontWeight: "400", marginLeft: "35%" }}
      >
        March 20th, 21st, 22nd & 23rd | Online | Conference - Connect -
        Designathon
      </p>
      <Button style={{ justifyContent: "right" }} text="Learn more" />
    </div>
  );
};

export default Revo;
