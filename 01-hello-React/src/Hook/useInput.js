import { useState } from "react";

function useInput(intialValue) {
  const [value, setValue] = useState(intialValue);
    const reset = ()=>{
        setValue(intialValue)
    }
    const bind = {
        value: value,
        onChange: (e) =>{
            setValue(e.target.value)
        },
    }
  return [value, reset, bind];
}

export default useInput;
