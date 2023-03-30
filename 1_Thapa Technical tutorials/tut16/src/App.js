import './static/app.css'
import Card from './Card'
import datas from './static/data'

function App() {
  return (
    <>
      <div className="cards">

        {datas.map((data, id) => (
          <Card
            key={id}
            url={data.Poster}
            title={data.Title}
            sname={data.Year}
            link={'#'}
          />
        ))}

      </div>
    </>
  );
}

export default App;
