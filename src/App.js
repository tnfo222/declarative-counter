//Dependencies
import React, { useState } from 'react';
import './App.css';

//interpolate javascript variable
function App() {
  let [ counter, changeCounter ] = useState(1);
  window.changeCounter = changeCounter;
  return (
    <div>
      <h1>{counter}</h1>
      <h4>{counter}</h4>
    </div>
  );
}

export default App;
