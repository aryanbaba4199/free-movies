// components/DreamPlannerAd.js
import React from "react";

const DreamPlannerAd = () => {
  return (
    <div className="bg-orange-500 text-white p-8">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-2xl font-bold ">
          Dream Planner - Your Event Our Responsibility
        </h1>
        <p className="text-lg mb-6">
          Make your events extraordinary with Dream Planner! From weddings to
          corporate events, we've got you covered.
        </p>
        <a
          href="https://dreamplanner.in"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-blue-500 py-2 px-4 rounded-full inline-block hover:bg-blue-100 transition duration-300"
        >
          Explore Dream Planner
        </a>
        <p className="mt-2">
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
    </div>
  );
};

export default DreamPlannerAd;
