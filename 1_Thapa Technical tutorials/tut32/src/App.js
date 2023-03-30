import { useState } from 'react'
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Card from '@mui/material/Card';

function App() {
  const [val, setVal] = useState(0)

  const inc = () => {
    setVal((prev) => {
      return prev + 1;
    });
  }

  const dec = () => {
    setVal((prev) => {
      if (prev === 0) {
        alert('sorry, zero limit reached')
        return prev;
      }
      return prev - 1;
    });
  }

  return (
    <>
      <Card variant="outlined">
        <h1>
          Number of 😊 {val}
        </h1>
        <Tooltip title="Add">
        <Button variant="outlined" onClick={inc}>👍</Button>
        </Tooltip>
        <Tooltip title="Delete">
          <Button variant="outlined" onClick={dec}>👎</Button>
        </Tooltip>
      </Card>
    </>
  );
}

export default App;
