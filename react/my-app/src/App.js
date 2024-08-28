import React from 'react';
import './App.css';


class Greeting extends React.Component {
  render() {
    return <div>Hello {this.props.name}!</div>;
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Greeting name="John Doe" />
      </header>
    </div>
  );
}

export default App;

//npm start pour tester