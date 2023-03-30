import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'

function App() {
  return (
    <>
      <div className="container">
        <h1 className="text-center">My name is khan 🐹</h1>
        <div className="text-center">
          <button className='btn btn-outline-success'>Click me</button>
        </div>

        <div className="d-flex justify-content-between mt-5">

          <div className="card" style={{ width: '18rem' }}>
            <img src="https://picsum.photos/200/150" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>

          <div className="card" style={{ width: '18rem' }}>
            <img src="https://picsum.photos/200/150" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>

          <div className="card" style={{ width: '18rem' }}>
            <img src="https://picsum.photos/200/150" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>


        </div>
      </div>
    </>
  );
}

export default App;
