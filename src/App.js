import React from 'react';
import Greeter from './Greeter'
import Counter from './Counter'
import './App.css';

function App() {
  return (
    <>
    <h1>HELLO FROM APP</h1>
    <Counter step={5}/>
    <Counter />
    <Greeter name="Karen"/>
    </>
  );
}

export default App;
