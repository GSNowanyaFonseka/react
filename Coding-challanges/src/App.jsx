import { useState } from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from "./pages/Home"
import Activity from './pages/Activity';
import Navbar from "./Components/Navbar"

function App(){

  // // section 1 
  // const[color,setColor] = useState('white');
  // const[text,setText] = useState('On');
  // const[count,updateCount] = useState(0);

  // // section 2
  // const add = () => {
  //   updateCount(count + 1);
  // };

  // const substract = () => {
  //   updateCount(count - 1);
  // }

  // const resetCount = () => {
  //   updateCount(0);
  // }

  // // section 3
  // const [desserts,addDessert] = useState([]);
  // const [isChecked, setChecked] = useState(false);
  // const dessertList = [];
  // const handler = () => {
  //   if({isChecked} == true){
  //     setChecked(true)
  //     dessertList.push()
  //   }
  // }

  return(
    // <div className='page'>
      
    //   <div className="section" style={{backgroundColor:color}}>
    //     <div className='button'>
    //       <button className="click-on" style={{backgroundColor:color}} onClick={() => color === "yellow" ? (setColor('white'), setText('On')) : (setColor('yellow'), setText('Off'))}>{text}</button>
    //     </div>
    //   </div>

    //   <div className="section" >
    //     <div className='button'>
    //       <p>{count}</p>
    //       <button className="add" onClick={add}>Add</button><br></br>
    //       <button className='substract' onClick={substract}>Substract</button><br></br>
    //       <button className="reset" onClick={resetCount}>Reset</button>
    //     </div>
    //   </div>
      
    //   <div className='section'>
    //     <p>Make your favourite desert recipie</p><br></br>
    //     <div className="checkbox-group">
    //       <label><input type="checkbox" value="Cherry Pie" checked={isChecked}/> Cherry Pie </label>
    //       <label><input type="checkbox" value="Cannoli" checked={isChecked}/> Cannoli</label>
    //       <label><input type="checkbox" value="Churros" checked={isChecked}/> Churros</label>
    //       <label><input type="checkbox" value="Millefeuille" checked={isChecked}/> Millefeuille</label>
    //       <label><input type="checkbox" value="Fraisier" checked={isChecked}/> Fraisier</label>
    //     </div>
    //   </div>
    // </div>
    <>
    <Navbar/>
      <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/activity" element={<Activity/>}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
