import React, {useState} from 'react';
import text from "./assets/data/data.json";

function App() {

  const [counter, setCounter] = useState(0);

  const click = () => {
    if (counter === text.length) setCounter(0);
    setCounter(prevState => prevState + 1);
  }

  return (
    <div className="app-container">
      <div className="text">
        {text[counter]}
      </div>
      <div className="button" onClick={click}>
        <a />
      </div>
    </div>
  );
}

export default App;
