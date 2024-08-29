import React, { useCallback, useState } from "react";
import Demo from "./Demo";

function Callback() {
  const [count, setCount] = useState(0);
  const [numb, setNumb] = useState(1);

  const incNumFn = () => {
    setNumb(numb + 1);
  };
  const incCountFn = useCallback(() => {
    setCount(count + 1);
  }, [count,numb]);

  return (
    <div>
      <h3>Numb:{numb}</h3>
      <h3>Count:{count}</h3>
      <button onClick={incNumFn}>IncNumb</button>
      <button onClick={incCountFn}>IncCount</button>
      <Demo num={numb} />
    </div>
  );
}

export default Callback;