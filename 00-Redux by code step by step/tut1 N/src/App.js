import User from './User'
import User1 from './User1'

function App() {
  return (
    <>
      <User 
        fname="vishal"
        lname="kumar" />
      <User1 
        data={{age:'19 🔥', passion:'Cycling 🚴‍♀️'}} />
    </>
  );
}

export default App;
