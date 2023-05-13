const red = {
  'color' : 'purple'
}

const name = 'vishal kumar 🐹🔥'
const external_name = '<b>new watch</b>'

function App() {
  return (
    <>

      <nav>
        <ul>
          <li> Home </li>
          <li> About </li>
          <li> Contact </li>
        </ul>
      </nav>

      <div className="container">
        my name is {name}
      </div>

      {external_name}

      <p style={red}>JSX 🔥🐹</p>
      <a href="leetcode.com/vishal_k78" htmlFor="name">
        click me
      </a>
    </>
  );
}

export default App;
