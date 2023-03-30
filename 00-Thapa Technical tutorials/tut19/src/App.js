import './static/app.css'
import SlotMachine from './SlotMachine'

function App() {
  return (
    <>
      <div className="center">
        <h2>
          Welcome to Slot Machine Game 🎮🎯
        </h2>
      </div>

      <SlotMachine x={'😊'} y={'😊'} z={'😊'} />
      <SlotMachine x={'🎯'} y={'😊'} z={'😊'} />
    </>
  );
}

export default App;
