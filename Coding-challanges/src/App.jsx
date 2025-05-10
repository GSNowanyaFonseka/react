import { useState } from 'react';
import './App.css';

function App(){

  // section 1 
  const[color,setColor] = useState('white');
  const[text,setText] = useState('On');
  const[count,updateCount] = useState(0);

  // section 2
  const add = () => {
    updateCount(count + 1);
  };

  const substract = () => {
    updateCount(count - 1);
  }

  const resetCount = () => {
    updateCount(0);
  }

  return(
    <div className='page'>
      
      <div className="section" style={{backgroundColor:color}}>
        <div className='button'>
          <button className="click-on" style={{backgroundColor:color}} onClick={() => color === "yellow" ? (setColor('white'), setText('On')) : (setColor('yellow'), setText('Off'))}>{text}</button>
        </div>
      </div>

      <div className="section" >
        <div className='button'>
          <p>{count}</p>
          <button className="add" onClick={add}>Add</button><br></br>
          <button className='substract' onClick={substract}>Substract</button><br></br>
          <button className="reset" onClick={resetCount}>Reset</button>
        </div>
      </div>
    </div>
    
    
  );
}

export default App;
