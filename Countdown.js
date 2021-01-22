import React, { useState, useEffect } from "react";

export default function Countdown() {
  const [seconds, setSeconds] = useState(60);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    setIntervalId(setInterval(() => setSeconds((sec) => sec - 1), 1000));
  }, []);

  useEffect(() => {
    if (seconds === 0) {
      clearInterval(intervalId);
    }
  }, [intervalId, seconds]);

  useEffect(() => {
    return () => {
      if (intervalId !== null) {
        clearInterval(intervalId);
      }
    };
  }, [intervalId]);

  return <div>COUNTDOWN: {seconds}</div>;
}
