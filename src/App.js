

import './App.css';
import { useState, useEffect } from 'react';
import Addtask from './component/Addtask.js';
import Header from './component/Header.js'
import Main from './component/Main.js'


function App() {
  const [Theme,Settheme] = useState(JSON.parse(localStorage.getItem("theme"))||'')
  const [performTask,setTaskperform] = useState(JSON.parse(localStorage.getItem("performTask"))||[])
  const [upDate,setUpdate] = useState({})
  useEffect(()=>{
    localStorage.setItem("performTask",JSON.stringify(performTask));
    localStorage.setItem("Theme",JSON.stringify(Theme))
  },[performTask,Theme])
  return (
    <div className="App">
     <Header/>
     <Addtask performTask={performTask} setTaskperform={setTaskperform} upDate={upDate} setUpdate={setUpdate}/>
     <Main performTask={performTask} setTaskperform={setTaskperform} upDate={upDate} setUpdate={setUpdate}/>
     {/* <End/> */}
    </div>
  );
}

export default App;
