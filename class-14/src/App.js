// import Button from './components/button';
// or
import { useState } from 'react';
import { Button } from './components/button';

function Counter() {
  let [count, setCount] = useState(0);

  return (
    <div>
      <h3>You count {count} times.</h3>
      <button onClick={() => {
        setCount(count = count + 1);
      }}>Increase</button>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Button text="Button 1" />
      <Button text="Button 2" />
      <Counter />
    </div>
  );
}

export default App;
