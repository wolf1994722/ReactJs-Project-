import React from "react"
import DataTypeProps from './$2DataTypeProps'

type ExtractingComponentProps = React.ComponentProps<typeof DataTypeProps>
function ExtractingComponent(props : ExtractingComponentProps) {
  return (
    <div>ExtractingComponent 
        
        count = {props.count} 
        loggedin = {props.isLoggedIn} 
        firstName = {props.obj.fname} 
        lastName = {props.obj.lname} 
        
        personList = {props.personList.map((person,id) => <div key={id}>{person.fname} {person.lname}</div>)}</div>
  )
}

export default ExtractingComponent