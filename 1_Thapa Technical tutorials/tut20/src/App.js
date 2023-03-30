import './static/app.css'

let number = 0

function Increment(params) {
  number++;
  document.write("click" + number)
}

function App() {
  return (
    <>
      <div className="center">
        <div className="content">
          <p>
            <span> {number} </span>
            Number of 😊
          </p>
          <button onClick={Increment}>
            Click me
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
