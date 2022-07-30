import {CleanCodeProps} from './$6CleanCoder.types'

function CleanCode({personList} : CleanCodeProps) {
  return (
    <>
        {personList.map((person,id) => <div key={id}> 😎 {person.fname} {person.lname}</div>)}
    </>
  )
}

export default CleanCode