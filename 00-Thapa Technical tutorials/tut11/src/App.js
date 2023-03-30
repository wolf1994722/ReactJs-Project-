import data from './static/data'

const heading = {
  fontFamily: 'Poppins',
  fontWeight: '700',
  fontStyle: '25px',
  textTransform: 'capitalize'
}

function App() {
  return (
    <>
      <div style={{ "padding": "1.15rem", "display": "flex", "alignItems": "center", "justifyContent": "center" }}>
        <h2 style={heading}>{data.name} </h2>
      </div>
    </>
  );
}

export default App;


/* 
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

.center {
    padding: 1.15rem;
    display: flex;
    align-items: center;
    justify-content: center;
}

.heading {
    font-weight: 700;
    font-style: 25px;
    text-transform: capitalize;
}
*/