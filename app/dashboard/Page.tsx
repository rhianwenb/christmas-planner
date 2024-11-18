'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import '../globals.css';
import Countdown from '../Countdown';

// interface CdownProps  {
//   xmas: React.Dispatch<React.SetStateAction<boolean>>
//   days: React.Dispatch<React.SetStateAction<number>>
//   hours: React.Dispatch<React.SetStateAction<number>>
//   minutes: React.Dispatch<React.SetStateAction<number>>
//   seconds: React.Dispatch<React.SetStateAction<number>>
// };


// Main Dashboard
export default function Dashboard() {

  const [xmas, setXmas] = useState(false);
  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);


  const countdownTimer = () => {
      const target = new Date("24 12 2024 23:59:59").getTime();

      const interval = setInterval(() => {
          const now = new Date().getTime();
          const difference = target - now;

          const d = Math.floor(difference / (1000 * 60 * 60 * 24));   
          const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
          const s = Math.floor((difference % (1000 * 60)) / 1000);
             
          if (difference <= 0) {
              setXmas(true);
              clearInterval(interval);
          } else {
            setDays(d);
            setHours(h);
            setMinutes(m);
            setSeconds(s);
          };

      }, 1000);
      // return () => clearInterval(interval);
    };

  useEffect(() => {
    countdownTimer();
  }, []);


  return (
    <div>
      <div className="container mx-auto mt-20">
        <div className="grid sm:grid-cols-3 gap-4">
          <div>
            <h3> To Do List </h3>
          </div>
          <div className="">
            <h3 className="mb-2"> Countdown to Christmas... tick tock!</h3>
            {days.toString()} : {hours} : {minutes} : {seconds}
            <div className=""> 
              {/* <Countdown title={"HELP!"} xmas={xmas} days={days} hours={hours} minutes={minutes} seconds={seconds} />  */}
            </div>
            
          </div>
          <div>
            <h3> Meal Plan </h3>
          </div>
        </div>
      </div>
    
    
    </div>
  )
};
