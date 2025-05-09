import { useState } from 'react';
import './App.css';

function App(){

  const[color,setColor] = useState('white');
  const[text,setText] = useState('On');

  return(
    <div className="page" style={{backgroundColor:color}}>
      <div className='button'>
        <button className="click-on" style={{backgroundColor:color}} onClick={() => color === "lightgreen" ? (setColor('white'), setText('On')) : (setColor('lightgreen'), setText('Off'))}>{text}</button>
      </div>
    </div>
    
  );
}

export default App;
