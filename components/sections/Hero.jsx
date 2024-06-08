import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-center mt-[5rem] text-[6rem] font-[700] leading-[7rem]">
        Welcome <br />
        organizers!
      </h1>

      <p className="text-center max-w-[600px] mx-auto mt-[1.5rem]">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
        corrupti nam adipisci harum excepturi, amet nisi labore eligendi ducimus
        accusamus pariatur neque ad odit velit iusto asperiores explicabo alias
        incidunt.
      </p>

      <button className="mt-[1rem] py-[.6rem] px-[1.5rem] bg-black text-white text-[1.2rem] font-[600]">
        <Link href="/plan">Create Plan</Link>
      </button>
    </div>
  );
};

export default Hero;
