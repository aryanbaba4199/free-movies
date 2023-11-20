import React from "react";

const StylersAd = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
          Explore the Latest Trends at Stylers
        </h2>
        <p className="text-lg text-center text-gray-700 mb-6">
          Discover affordable and trendy clothing at Stylers. Shop now for
          fashion that fits your style!
        </p>
        <a
          href="https://stylers.in"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center bg-blue-500 text-white  px-4 rounded-full hover:bg-blue-600 transition duration-300"
        >
          Shop Now
        </a>
        <p className="mt-2 text-center">
        Your Movie Download Link is ready in bottom
        <img
          src="https://cdn-icons-png.flaticon.com/256/833/833360.png"
          width={20}
          height={20}
          alt="Download Movie"
          style={{ display: "inline-block", verticalAlign: "middle" }}
        />
      </p>
      </div>
      
    </>
  );
};

export default StylersAd;
