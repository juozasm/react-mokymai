import React, { useState, useEffect } from "react";

function getTime(state) {
  const { minutes, hours } = state;
  const newSeconds = 0;
  const newMinutes = minutes + 1 === 60 ? 0 : minutes + 1;
  const newHours =
    minutes + 1 === 60 ? (hours + 1 >= 24 ? 0 : hours + 1) : hours;

  return { seconds: newSeconds, minutes: newMinutes, hours: newHours };
}

export default function YMS() {
  const [clockState, setClockState] = useState({
    seconds: 0,
    minutes: 0,
    hours: 0
  });
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    setIntervalId(
      setInterval(
        () =>
          setClockState((clock) => ({ ...clock, seconds: clock.seconds + 1 })),
        1000
      )
    );
  }, []);

  useEffect(() => {
    if (clockState.seconds === 60) {
      setClockState(getTime);
    }
  }, [intervalId, clockState]);

  useEffect(() => {
    return () => {
      if (intervalId !== null) {
        clearInterval(intervalId);
      }
    };
  }, [intervalId]);

  console.log(clockState.seconds);
  return (
    <div>
      {clockState.hours}:{clockState.minutes}:{clockState.seconds}
    </div>
  );
}
