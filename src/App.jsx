import React, { useEffect, useRef } from "react";
// import bgCafe from "./assets/bgCafe.jpg";
import vector from "./assets/vector.svg";

import Card from "./Components/Card";

const App = () => {
  const btnFocus = useRef(null);

  useEffect(() => {
    btnFocus.current && btnFocus.current.focus();
  }, [btnFocus]);

  return (
    <>
      {/* <img
        src={bgCafe}
        alt="bg-cafe"
        className="w-full h-[300px] xl:h-auto object-cover"
      /> */}
      <div
        id="overlay"
        className="relative z-10 min-h-screen w-full bg-[#1B1D1F] px-8 py-20 rounded-xl overflow-hidden sans"
      >
        <img
          src={vector}
          alt="vector"
          className="absolute -z-10 left-1/2 top-5 w-64"
        />
        <h1 className="text-center text-headingClr sans font-bold text-[2rem]">
          Our Collection
        </h1>
        <p className="sans relative text-body text-[1rem] font-semibold mx-auto max-w-[30rem] lg:max-w-[32rem] my-4 text-center">
          Introducing our Coffee Collection, a selection of unique coffees from
          different roast types and origins, expertly roasted in small batches
          and shipped fresh weekly.
        </p>
        <ul>
          <li className="sans flex gap-6 justify-center my-2 sans text-sm text-headingClr font-semibold ">
            <button
              type="button"
              ref={btnFocus}
              className="px-3 py-2 hover:bg-body rounded-md focus:bg-body border-none outline-none transition"
            >
              All Products
            </button>
            <button
              type="button"
              className="px-3 py-2 hover:bg-body rounded-md transition"
            >
              Available Now
            </button>
          </li>
        </ul>
        <Card />
      </div>
    </>
  );
};

export default App;
