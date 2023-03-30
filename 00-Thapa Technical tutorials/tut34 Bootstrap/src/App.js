import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'
import './static/app.css'
import {questions} from './static/data'
import Accordation from './Accordation'


function App() {
  const [data, setData] = useState(questions)

  return (
    <>
      <div className="container mt-5 align-items-center justify-content-center h-100">

        <div className="accordion" id="accordionExample">

          {data.map((item) => {
            return <Accordation
              key={item.id}
              id={item.id}
              questions={item.questions}
              answer={item.answer}
            />
          })}

        </div>
      </div>


    </>
  );
}

export default App;
