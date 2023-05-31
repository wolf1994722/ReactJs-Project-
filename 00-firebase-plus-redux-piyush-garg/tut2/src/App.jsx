import React from "react";
import { getDatabase, ref, set } from "firebase/database";
import { app } from "./firebase";

//* instance
const db = getDatabase(app)

function App() {
  const putData = () => {
    set(ref(db, 'users/vivek'), {
      id: 2,
      name: 'vivek',
    });
  }
  return <>
    vishal kumar
    <button onClick={putData}>push</button>
  </>;
}

export default App;
