import React from 'react'

function ReactMemoChild({name}) {
  console.log("child render");
  return (
    <div>
        name is {name}
    </div>
  )
}

export default React.memo(ReactMemoChild)
// export default (ReactMemoChild)