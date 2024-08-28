import React from 'react';
import './App.css';
import { useState } from 'react';


class Greeting extends React.Component {
  render() {
    return <div>Hello {this.props.name}!</div>;
  }
}


function App() {
  const [count, setCount] = useState(0);

  function addClick() {
    setCount(count + 1);
  }
  function removeClick() {
    setCount(count - 1);
  }

  return (
    <div className="App">
      <header className="App-header">
      <Greeting name="John Doe" />
      <h1>{count}</h1>
      <button style={{ width: '200px', height: '100px' }} onClick={addClick}>+</button>
      <button style={{ width: '200px', height: '100px' }} onClick={removeClick}>-</button>
      </header>
    </div>
    
  );
}

export default App;

//npm start pour tester