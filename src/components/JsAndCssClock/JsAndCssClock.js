import React, { useEffect, useState } from "react";
import "./style.scss";

const JsAndCssClock = () => {
  const [secondDegrees, setSecondDegrees] = useState(90);
  const [minuteDegrees, setMinuteDegrees] = useState(90);
  const [hourDegrees, setHourDegrees] = useState(90);

  useEffect(() => {
    setTimeout(() => {
      setTime();
    }, 1000);
  }, [secondDegrees]);

  const setTime = () => {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondDegreesConverter = (seconds / 60) * 360 + 90;
    setSecondDegrees(secondDegreesConverter);

    const minutes = now.getMinutes();
    const minuteDegreesConverter = (minutes / 60) * 360 + 90;
    setMinuteDegrees(minuteDegreesConverter);

    const hours = now.getHours();
    const hourDegreesConverter = (hours / 12) * 360 + 90;
    setHourDegrees(hourDegreesConverter);
  };

  return (
    <div className="clockBackground">
      <div className="clock">
        <div className="clock-inner">
          <div className="clock-face">
            <div
              style={{ transform: `rotate(${hourDegrees}deg)` }}
              className="hand hour-hand"
            ></div>
            <div
              style={{ transform: `rotate(${minuteDegrees}deg)` }}
              className="hand min-hand"
            ></div>
            <div
              style={{ transform: `rotate(${secondDegrees}deg)` }}
              className="hand sec-hand"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JsAndCssClock;
