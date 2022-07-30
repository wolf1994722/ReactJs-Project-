import React, { useEffect, useState } from 'react'

function ConditionalRun1() {
  let [x,setX] = useState(0)
  let [y,setY] = useState(0)

  useEffect(()=>{
    window.addEventListener("mousemove",(e)=>{
      setX(e.clientX)
      setY(e.clientY)
    })
  },[])

  return (
    <div>
      co-ordinate are x : {x} & y : {y}
    </div>
  )
}

export default ConditionalRun1