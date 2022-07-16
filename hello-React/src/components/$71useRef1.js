import React, { useEffect, useRef } from "react";

// useLayoutEffect , useDebugValue, useImperativeHandle
function UnameUseRef() {
  let inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();

    return () => {};
  }, []);

  return (
    <div>
      <textarea type="text" name="" ref={inputRef} id=""></textarea>
    </div>
  );
}

export default UnameUseRef;
