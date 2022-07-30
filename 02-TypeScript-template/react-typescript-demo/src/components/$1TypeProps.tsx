type GreetName = {
    name : string,
}

function TypeProps(props : GreetName) {
  return (
    <>
      hello {props.name} 🤙 🤪     
    </>
  )
}

export default TypeProps