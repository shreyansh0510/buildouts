import React, { useEffect, useState } from "react";

function Xstopwatch() {
  const [timer, setTimer] = useState(0);

  const [minute, setMinute] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const [toggle, setToggle] = useState(false);

  const updateTimer = () => {
    console.log("updateTimer>>", timer);
    let updateMinute = Math.floor(timer / 60);
    let updateSeconds = timer % 60;
    setMinute(() => {
      return updateMinute;
    });
    setSeconds(() => {
      return updateSeconds;
    });
  };

  const updateTime = (stop) => {
    let ID = setInterval(() => {
      setTimer((prevTimer) => {
        console.log("setTimer");
        return prevTimer + 1;
      });
    }, 1000);

    console.log("ID", ID);

    if (stop) {
      console.log("ID", ID);
      clearInterval(ID);
      //   setTimer(0);
      //   setMinute(0);
      //   setSeconds(0);
    }
  };

  const handleToggle = () => {
    setToggle((prevToggle) => !prevToggle);
    updateTime();
  };

  //   console.log("timer", timer);

  useEffect(() => {
    updateTimer();
  }, [timer]);

  console.log("toggle>>>>>>", toggle);

  return (
    <>
      <div>
        <h3>Stopwatch</h3>
        <div>Time: {`${minute}:${seconds}`}</div>
        <div>
          <button onClick={handleToggle}>{!toggle ? "Start" : "Stop"}</button>
          <button onClick={() => updateTime(true)}>Reset</button>
        </div>
      </div>
    </>
  );
}

export default Xstopwatch;
