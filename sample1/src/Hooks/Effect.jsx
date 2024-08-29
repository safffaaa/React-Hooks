import React, { useEffect, useState } from "react";

function Effect() {
  const [time, setTime] = useState(0);
  const [active, setActive] = useState(false);

  useEffect(() => {
    let timer = null;
    if (active) {
      timer = setInterval(() => {
        setTime(time + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [active, time]);

  function reset() {
    setActive(false);
    setTime(0);
  }

  return (
    <div>
      <h3>Timer:{time}</h3>
      <button onClick={() => setActive(true)}>start</button>
      <button onClick={() => setActive(false)}>pause</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}

export default Effect;
