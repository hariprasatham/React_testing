import React from 'react';
import logo from './logo.svg';
import './App.css';
import Skills from './components/skills/Skills';
import Application from './components/application/Application';
import Counter from './components/counter/Counter';

function App() {
  const skills = ["HTML", "CSS", "Js"]
  return (
    <div className="App">
<Counter/>
    </div>
  );
}

export default App;
