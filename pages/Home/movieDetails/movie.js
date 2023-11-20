import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import DP from "../../Ads/dreamplanner";
import Styler from "../../Ads/stylers";


const MovieDetail = () => {
  const [countdown, setCountdown] = useState(10); // Initial countdown value
  const [showButton, setShowButton] = useState(false); // State to control button visibility
  const router = useRouter();
  const {name,cat, downloadUri} = router.query;

  useEffect(() => {

    const countdownInterval = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);
    if (countdown === 0) {
      setShowButton(true);
      clearInterval(countdownInterval);
    }
    
    return () => clearInterval(countdownInterval);
  }, [countdown]);

  const downloadBtn = () =>{
    router.push(downloadUri)
  }
  

  return (
    <>
      <div className="flex flex-col sm:flex-row">
        {/* Dream Planner */}
        <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
          <DP />
          <div className="mt-8 h-96 overflow-y-scroll">
            <iframe
              src="https://dreamplanner.in"
              title="Dream Planner"
              className="w-full h-full"
              frameBorder="0"
              scrolling="yes"
            ></iframe>
          </div>
        </div>
        
        {/* Stylers */}
        <div className="w-full sm:w-1/2">
          <Styler />
          <div className="mt-8 h-96 overflow-y-scroll">
            <iframe
              src="https://stylers.in"
              title="Stylers"
              className="w-full h-full"
              frameBorder="0"
              scrolling="yes"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="text-white text-center mt-8 mb-2">
        {showButton && (
          <>
          
          <button onClick={downloadBtn} className="bg-slate-950 text-white font-semibold py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300">
            Download 
          </button>
          
          <p className="font-semibold">Full {cat}  {name}</p>
          
          </>)}
        {countdown > 0 && (
          <p className="text-lg mt-4">Download Link Generating: {countdown}</p>
        )}
      </div>
    </>
  );
};

export default MovieDetail;
