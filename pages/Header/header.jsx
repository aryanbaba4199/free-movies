// components/Heading.js

import React from "react";

const Heading = () => {
  return (
    <>
      <div className="flex">
        <div className=" mt-2 mx-5">
          <h1 className="text-2xl md:text-5xl lg:text-6xl font-semibold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-400 to-white">
            <text className=" text-4x1 text-red-600">F</text>ree{" "}
            <text className="text-red-600">M</text>ovies
          </h1>
          <p className="text-gray-300 mt-4">
            Discover a world of free entertainment
          </p>
        </div>
        <div className="mx-10 flex gap-4">
          <div className="w-24 h-16 rounded-lg overflow-hidden">
            <img
              src="https://variety.com/wp-content/uploads/2017/12/hotstar.jpg"
              width={120}
              height={50}
              className="my-2 rounded-2xl"
            />
          </div>
          <div className="w-24 h-16 rounded-lg overflow-hidden">
            <img
              src="https://images.squarespace-cdn.com/content/v1/63d39549e4bd300803cea4ed/89b3a29b-bbb8-473e-aa60-9b6dbb30b6da/full_width_image___prime_black_logo_on_blue__a2001746.jpg"
              width={120}
              height={50}
              className="my-2 rounded-2xl"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Heading;
