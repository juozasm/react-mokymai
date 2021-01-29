import React, { useState, useEffect } from "react";

function getTime(state) {
  if (state.seconds === 60) {
    const { minutes, hours } = state;
    const newSeconds = 0;
    const newMinutes = minutes + 1 === 60 ? 0 : minutes + 1;
    const newHours =
      minutes + 1 === 60 ? (hours + 1 >= 24 ? 0 : hours + 1) : hours;

    return { seconds: newSeconds, minutes: newMinutes, hours: newHours };
  }

  return state;
}

export default function YMS() {
  const [clockState, setClockState] = useState({
    seconds: 58,
    minutes: 58,
    hours: 2
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
    console.log("test");

    setClockState(getTime);
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
