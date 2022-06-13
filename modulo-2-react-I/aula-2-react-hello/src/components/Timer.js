import React, { useEffect, useState } from "react";

export default function Timer() {
  const [seconds, setSeconds] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);

    return () => {
      console.log("Cleaning interval");
      clearInterval(interval);
    };
  }, []);

  return <span className="bg-red-400 text-lg mr-2 p-2 border">{seconds}</span>;
}
