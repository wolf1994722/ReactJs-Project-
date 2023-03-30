import data from './static/data'
import './static/index.css'

function App() {
  return (
    <>
      <div className="center">
        <h2 className="heading">{data.name} </h2>
      </div>

      <div className="center center-img-box">

        <div className="card">
          <img src={data.url1} alt="url1" />
        </div>

        <div className="card">
          <img src={data.url2} alt="url1" />
        </div>

        <div className="card">
          <img src={data.url3} alt="url1" />
        </div>

      </div>
    </>
  );
}

export default App;
