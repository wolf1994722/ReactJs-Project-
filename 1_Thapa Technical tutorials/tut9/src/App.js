import data from './data'

function App() {
  return (
    <>
      JSX Attribute
      <h2 contentEditable='true'>{data.heading}</h2>
      <a href={'https://leetcode.com'} target={'_blank'} rel="noreferrer"> 
        leetcode
      </a>

      <br />

      <img src={data.url1} alt="randomImages" />
      <img src={data.url2} alt="randomImages" />
    </>
  );
}

export default App;
