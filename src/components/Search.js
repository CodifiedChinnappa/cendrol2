import React, { useState } from "react";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

const PriceSlider = () => {
  const [inputs, setInputs] = useState({
    price: { min: 1000000, max: 3000000 },
  });

  //prevent default on mouse scroll
  document.addEventListener(
    "wheel",
    function (e) {
      e.preventDefault();
    },
    { passive: false }
  );

  return (
    <div className="w-full px-7 cursor-pointer mb-5 space-y-8 flex items-center flex-col justify-centre">
      <div className="flex search-range">
        <span className="border-[1px] border-gray-300 border-r-0 px-3 py-2 min-w-[5vw] text-center">
          {inputs.price.min}
        </span>
        <span className="border-[1px] border-gray-300 px-3 py-2 min-w-[5vw] text-center">
          {inputs.price.max}
        </span>
      </div>
      <InputRange
        // classNames="text-white"
        maxValue={5000000}
        minValue={0}
        value={inputs?.price}
        onChange={(value) => setInputs((prev) => ({ ...prev, price: value }))}
      />
    </div>
  );
};

const Search = ({ data }) => {
  const [budget, setBudget] = useState(false);

  return (
    <section
      className=" bottom-[-1px] grid grid-cols-1 gap-3 py-[3rem] mb-[2rem] rounded-md w-[96%] md:w-[66%] "
      style={{
        background: "rgba(255, 255, 255,0.95) 0% 0% no-repeat padding-box",
      }}
    >
      <div className="flex flex-col items-center lg:flex-row gap-3">
        <div className="flex justify-center m-auto px-2 py-1 shadow-md shadow-gray-400  rounded-[3rem]">
          <span className="bg-red-500 px-3 py-2 rounded-full uppercase text-white text-bold text-[12px] cursor-pointer">
            RESIDENTIAL
          </span>
          <span className="px-3 py-2 rounded-full text-black uppercase text-bold text-[12px] cursor-pointer">
            COMMERCIAL
          </span>
        </div>
        <div className="flex justify-center mx-auto px-6  py-2  bg-white shadow-md shadow-gray-400  rounded-[3rem]">
          <div className="">
            <i className="fa-solid fa-location-dot text-[#EC1B26] mr-3"></i>
            <input
              type="text"
              className="placeholder-black"
              placeholder="Search for Location"
            />
          </div>
          <button>
            <i className="fa-solid fa-xmark text-[#EC1B26]"></i>
          </button>
        </div>
        <button className="px-6 py-3 m-auto uppercase text-white text-[15px] hover:bg-[#EC1B26] bg-red-600 rounded-md">
          Search
        </button>
      </div>
      {/* //TAGS */}
      <div className="flex flex-wrap justify-center gap-3 mx-auto px-2 py-5 bg-white shadow-md shadow-gray-400 rounded-md w-[90%] text-[#4A4C4B]">
        {data?.tags?.map((item) => (
          <span
            key={item}
            className="px-2 py-1 border-[1px]   hover:bg-[#EC1B26] hover:text-white hover:border-none border-[#4A4C4B] rounded-full  text-bold text-[13px] cursor-pointer"
          >
            {item}
          </span>
        ))}
      </div>
      {/* //Budget */}
      <div className="flex flex-col items-center justify-center m-auto  gap-3 px-2 py-5 bg-white shadow-md shadow-gray-400 rounded-md w-[90%]">
        <div className="flex flex-wrap justify-center gap-3 mx-auto px-2 py-5 w-[90%]">
          {data?.status?.map((item, i) => (
            <span
              key={i}
              onClick={() => setBudget(!budget)}
              className="px-2 py-1 border-[1px]  border-[#EC1B26] hover:bg-[#FFF2F2]   rounded-full  text-bold text-[13px] cursor-pointer capitalize"
            >
              {item} <i className="fa fa-caret-down mt-1 px-2"></i>
            </span>
          ))}
        </div>
        {budget ? <PriceSlider /> : null}
      </div>
    </section>
  );
};

export default Search;
