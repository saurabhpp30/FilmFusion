import React from 'react'
import  '../addtask.css'

function Addtask({performTask,setTaskperform,upDate,setUpdate}) {
  
  let Taskadder = (e)=>{
         e.preventDefault()
         if (upDate.id){
          console.log("hello gorilla")
          const date = new Date;
          const editTask = performTask.map((todo)=>(
            todo.id === upDate.id ? {id:upDate.id ,name : e.target.task.value ,time: `${date.toLocaleTimeString()}`} :todo
          ))
             setTaskperform(editTask)
             setUpdate({})
         }
         else{
          if(e.target.task.value){
          const date = new Date;
          const newTask ={
           id:  date.toLocaleTimeString(),
           name: e.target.task.value,
           time: `${date.toLocaleTimeString() }`
          }
         setTaskperform([...performTask,newTask])
         setUpdate({})
        }else{
          setTaskperform([...performTask])
        }
         }

  }
  return (
    <section className='addTask'>
        <form onSubmit={Taskadder}>
            <input onChange= {e => setUpdate({...upDate,name:e.target.value})}  value ={upDate.name || ""} type="text" placeholder='add task'  name="task" autoComplete='off' maxLength={20}  ></input>
            <button type='submit' >{ upDate.id ? "UPDATE" : "ADD"}</button>
            
        </form>
    </section>
  )
}
export default Addtask
