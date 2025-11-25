import React, { useEffect } from "react";

const Timer = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("count 실행");
    }, 1000);

    return () => {
      console.log("타이머 정리됨");
      clearInterval(interval);
    };
  }, []);
  return <div></div>;
};

export default Timer;
