import Card from './Card';
import List from './List';

function App() {
  return (
    <>
      <p>Self Component without parameter</p>
      <Card name="vishal" />
      <List data={['vishal', 'suraj', 'vivek', 'gymmy']} />
    </>
  );
}

export default App;
