import Navbar from './components/Navbar'
import TextForm from './components/TextForm'

function App() {
  return (
    <>
      <Navbar title="TextUtils" lists={["About", "Contact"]} />
      <TextForm
        heading="Anaylze text 🔥"
        labeling="Enter Text 🐹"
      />
    </>
  );
}

export default App;
