import data, {languages, Greeting} from './static/data'

function App() {
  return (
    <>
      {Greeting()} {data.name}
      <h2>Language known : </h2>
      {languages.map((language)=> <li>{language}</li>)}
    </>
  );
}

export default App;
