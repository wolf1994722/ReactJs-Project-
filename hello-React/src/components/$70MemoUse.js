import React , {useState, useMemo} from 'react'
// useMemo is used to cache value
function MemoUse() {
    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)

    const incrementOne = ()=>{
        setCounterOne(pre => pre + 1)
    }
    const incrementTwo = ()=>{
        setCounterTwo(pre => pre + 1)
    }
    const isEven = useMemo(()=>{
        let i =0
        while(i < 10000) i++
        return counterOne%2 === 0
    },[counterOne])
  return (
    <div>
        <button onClick={incrementOne}>Counter One - {counterOne}</button>
        <span>{isEven ? 'Even' : 'Odd'}</span>
        {/* Before it was function call isEven() but by useMemo we use isEven as a varible refrence */}
        <button onClick={incrementTwo}>Counter One - {counterTwo}</button>
    </div>
  )
}

export default MemoUse