"use client";
import React, { useState, useEffect } from "react";

const initialTime = 2000000;
const Countdown = () => {
  const [timeRemaining, setTimeRemaining] = useState(initialTime);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime === 0) {
          clearInterval(timerInterval);
          // Perform actions when the timer reaches zero
          console.log("Countdown complete!");
          return 0;
        } else {
          return prevTime - 1;
        }
      });
    }, 1000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(timerInterval);
  }, []); // The empty dependency array ensures the effect runs only once on mount

  const days = Math.floor(timeRemaining / 86400);
  const hours = Math.floor((timeRemaining % 86400) / 3600);
  const minutes = Math.floor((timeRemaining % 3600) / 60);
  const seconds = timeRemaining % 60;

  return (
    <div>
      <div className="grid auto-cols-max grid-flow-col gap-2 text-center">
        <div className="flex flex-col items-center">
          <span className="countdown font-mono text-xs font-bold p-2 rounded-full">
            <span style={{ "--value": days } as any}></span>
          </span>
          <span className="text-xs">Day</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="countdown font-mono text-xs font-bold p-2 rounded-full">
            <span style={{ "--value": hours } as any}></span>
          </span>
          <span className="text-xs">Hrs</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="countdown font-mono text-xs font-bold p-2 rounded-full">
            <span style={{ "--value": minutes } as any}></span>
          </span>
          <span className="text-xs">Min</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="countdown font-mono text-xs font-bold p-2 rounded-full">
            <span style={{ "--value": seconds } as any}></span>
          </span>
          <span className="text-xs">Sec</span>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
