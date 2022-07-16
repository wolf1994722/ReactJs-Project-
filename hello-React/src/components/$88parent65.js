import React , {useState, useMemo, useCallback} from 'react'
import Child65 from './$88child65'

function Parent65() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('vishal')

    const obj = {
        fname : 'vishal',
        lname : 'kumar',
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const memoObj = useMemo(()=> obj,[])

    const fun1 = ()=>{
        return <h2>pop 🍿🥤🎉🍾</h2>
    }

    const memoFun1 = useCallback(fun1,[])

    console.log('Incorrect memo parent');
  return (
    <div>
        <button onClick={()=> setCount(co => co + 1)}>😜 😂 {count}</button>
        <button onClick={()=> setName('Papu')}>😜 {name}</button>
        <Child65 name={name} fun1={memoFun1} obj={memoObj} >

        </Child65>
    </div>
  )
}

export default Parent65