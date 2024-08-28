import React from 'react';
import './App.css';
import { useState } from 'react';


class Greeting extends React.Component {
  render() {
    return <h1>Hello {this.props.name}!</h1>;
  }
}

// --------------------------------------------------------------
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
//--------------------------------------------------------------

function NameList() {
  const names = ['Alice', 'Bob', 'Charlie', 'David'];

  return (
    <div>
      <p>List of Names:</p>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

//--------------------------------------------------------------
function App() {

  return (
    <div className="App">
      <header className="App-header">
      <Greeting name="John Doe" />
      <Counter />
      <NameList />
      </header>
    </div>
    
  );
}

export default App;

//npm start pour tester