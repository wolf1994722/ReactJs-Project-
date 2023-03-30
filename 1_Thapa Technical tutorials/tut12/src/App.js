import data from './static/data'
import './static/app.css'

const red = {
  color : 'red'
}

function App() {
  return (
    <>
      <div className="center">
        <div className="content">
          <span>
            Hello Sir 🙋‍♀️
            <span style={red}>, </span>
          </span>
          <span>{data.wish}</span>
        </div>
      </div>
    </>
  );
}

export default App;
