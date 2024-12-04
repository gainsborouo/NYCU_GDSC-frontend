import React from "react";
import Greeting from "./components/Greeting";
import Counter from "./components/Counter";
import InputHandler from "./components/InputHandler";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Greeting name="Alice" />
        <Greeting name="Bob" />
      </div>
      <div className="container">
        <Counter />
      </div>
      <div className="container">
        <InputHandler />
      </div>
      
    </div>
  );
}

export default App;
