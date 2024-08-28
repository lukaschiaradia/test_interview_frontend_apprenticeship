import React from 'react';
import './App.css';
import { useState } from 'react';


class Greeting extends React.Component {
  render() {
    return <div>Hello {this.props.name}!</div>;
  }
}

function Counter() {
  const [count, setCount] = useState(0);

  const addClick = () => {
    setCount(count + 1);
  };

  const removeClick = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button style={{ width: '200px', height: '100px' }} onClick={addClick}>+</button>
      <button style={{ width: '200px', height: '100px' }} onClick={removeClick}>-</button>
    </div>
  );
}

function App() {

  return (
    <div className="App">
      <header className="App-header">
      <Greeting name="John Doe" />
      <Counter />
      </header>
    </div>
    
  );
}

export default App;

//npm start pour tester