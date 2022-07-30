import { useRef, useEffect } from "react";

function DOMref() {
//   const inputRef = useRef<HTMLInputElement>(null);
  const inputRef = useRef<HTMLInputElement>(null!);
  useEffect(() => {
    // if(inputRef.current)
    //     inputRef.current.focus();
    inputRef.current.focus();
  },[]);
  return (
    <>
      <input type="text" ref={inputRef} />
    </>
  );
}

export default DOMref;
