let fname = "vishal"
let lname = "kumar 🐹🙀🐶"

function App() {
  return (
    <div>
      template literal in jsx

      <p>{fname} {lname}</p>
      <p>{fname + " " + lname}</p>
      <p>{`my name is ${fname} ${lname}`}</p>
    </div>
  );
}

export default App;
