type DataTypePropss = {
    obj : {
        fname : string
        lname : string
    },
    count : number
    isLoggedIn : boolean
    personList : {
        fname : string
        lname : string
    }[]
}

function DataTypeProps(props : DataTypePropss) {
  return (
    <>
        {
            props.isLoggedIn ? `Hello 😜 ${props.obj.fname} ${props.obj.lname} , ${props.count} message`:
            `welcome guest`
        }
        {
            props.personList.map((person,id) => <div key={id}>🤗 {person.fname} {person.lname}</div>)
        }
    </>
  )
}

export default DataTypeProps