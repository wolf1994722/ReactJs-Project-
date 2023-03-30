const name = "vishal kumar"
const date = new Date();

function App() {
  return (
    <>
      <h2>🐶🙀🐹🐰 name is {name}</h2>
      <p>Today date is {`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}</p>
      <p>Today date is {date.toLocaleDateString()}</p>
      <p>Current time is {`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${date.getHours() >= 12 ? 'pm' : 'am'}`}</p>
      <p>Current time is {date.toLocaleTimeString()}</p>
    </>
  );
}

export default App;
