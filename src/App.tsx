import React, {useState} from 'react';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import text from "./assets/data/data1.json";

function App() {

  const [counter, setCounter] = useState(0);

  const click = () => {
    if (counter === text.length) setCounter(0);
    setCounter(prevState => prevState + 1);
  }

  return (

  <BrowserRouter basename="/college-task/">
    <Routes>
      <Route path="/" element={
        <div className="app-container">
          <div className="text">
            {text[counter]}
          </div>
          <div className="button" onClick={click}>
            <a />
          </div>
        </div>
      } />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
