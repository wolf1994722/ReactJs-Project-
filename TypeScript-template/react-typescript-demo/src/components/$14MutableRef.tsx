import { useState, useEffect, useRef } from "react";

function MutableRef() {
  const [count, setCount] = useState(0);
  const countRef = useRef<number | null>(null);

  const stopTimer = () => {
    if (countRef.current) window.clearInterval(countRef.current);
  };
  useEffect(() => {
    countRef.current = window.setInterval(() => {
      setCount(count + 1);
    }, 1000);
    return ()=>{
        stopTimer()
    };
  });
  return (
    <>
      count 🦺 - {count}
      <button onClick={() => stopTimer()}>stop 🚫</button>
    </>
  );
}

export default MutableRef;
