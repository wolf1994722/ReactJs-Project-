import React, { useEffect, useState } from 'react'

function UseEffectHook() {
    let [count,setCount] = useState(0)
    useEffect(()=>{
        document.title = `you have click ${count}`
    })
  return (
    <React.Fragment>
        <button onClick={()=> setCount(prev => prev + 1) }>click me {count}</button>
    </React.Fragment>
  )
}

export default UseEffectHook