import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransitionList from './components/TransitionList';
import AddTransition from './components/AddTransition';
import GlobalState from './context/GlobalState'

function App() {
  return (
    <GlobalState>
      <Header></Header>
      <Balance></Balance>
      <IncomeExpenses></IncomeExpenses>
      <TransitionList></TransitionList>
      <AddTransition></AddTransition>
    </GlobalState>
  );
}

export default App;
