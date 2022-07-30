import React from 'react'

function ListName() {
    let names = ['vishal','vivek','raju','kaliya']
    let nameList = names.map((name,index)=> <small key={index}>🖐 {name} -- </small>)
    // rather don't user index as key
  return (
    <div>
        {nameList}
    </div>
  )
}

export default ListName