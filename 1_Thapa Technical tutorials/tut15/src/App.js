import * as data from './static/data';

function App() {
  let a = 5, b = 3;
  return (
    <>
      <h2>Basic Calculator 🐰🐹🐶🙀</h2>
      <ol>
        <li>sum of two number is {data.addtion(a,b)}</li>
        <li>division of two number is {data.division(a,b)}</li>
        <li>multiplication of two number is {data.multiplication(a,b)}</li>
        <li>subtraction of two number is {data.subtraction(a,b)}</li>
      </ol>
    </>
  );
}

export default App;
