import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar title="TextUtils" lists={["About", "Contact"]}/>
      <Navbar/>
    </>
  );
}

export default App;
