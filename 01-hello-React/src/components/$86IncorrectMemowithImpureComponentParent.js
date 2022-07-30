import React , {useState} from 'react'
import IncorrectMemowithImpureComponentChild from './$86IncorrectMemowithImpureComponentChild'

function IncorrectMemowithImpureComponentParent() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('vishal')
    console.log('Incorrect memo parent');
  return (
    <div>
        <button onClick={()=> setCount(co => co + 1)}>😜 {count}</button>
        <button onClick={()=> setName('Papu')}>😜 {name}</button>
        <IncorrectMemowithImpureComponentChild name={name}>

        </IncorrectMemowithImpureComponentChild>
    </div>
  )
}

export default IncorrectMemowithImpureComponentParent