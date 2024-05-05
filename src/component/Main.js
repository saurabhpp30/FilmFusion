import React from 'react'
import './Main.css'
import { useTask } from '../UseContext/Addcontext'

function Main({performTask,setTaskperform,upDate,setUpdate}) {
    const {Taskperfomernew} = useTask()
    
    let DeleteHandler = (id)=>{
        
        const Taskperfomer = performTask.filter(task => task.id !== id)
        console.log(Taskperfomer)
        setTaskperform(Taskperfomer)
        console.log(Taskperfomernew)
    }
    let EditHandler = (id)=>{
         const Updateperfomer = performTask.find(evalu => evalu.id === id)
         setUpdate(Updateperfomer)
    }
    
return (
<section className='showTask'>
<div className='head'>
 <div>
     <span className='title'>todo</span>
     <span className='Count'>{performTask.length}</span>
 </div>
 <button type="submit" onClick={()=> setTaskperform([])} className='clearAll'>Clear all</button>
</div>
<ul>
 {
     performTask.map((task) =>(
      <li>
         <p>
             <span>{task.name}</span>
             <span>{task.time}</span>
         </p>
         <i  onClick= {()=> EditHandler(task.id)}class="bi bi-pencil-square"></i>
         <i onClick = {()=> DeleteHandler(task.id)} className='bi bi-trash'></i>
      </li>
     
     ) 

     )
 }
 
</ul>
</section>
)
}

export default Main
