import { createContext, useContext, useReducer } from "react";
import { taskReducer } from "../useRuducer/taskReducer";
const initailstate= {
     
    Taskperformernew:[],
    Taskupdater:{}

}

const TaskContext = createContext(initailstate)

export const Taskprovider = ({children}) => {
   const  [state,dispatch] = useReducer(taskReducer,initailstate)
   const add_task =(newTask)=>{
    const Addperformer = state.Taskperformernew.concat(newTask)
    // console.log(Addperformer)
    dispatch({
        type:"ADD_TASK",
        payload :{
            products:Addperformer
        }
    })
    console.log(state.Taskperformernew)
   }
   const   value = {
        Taskupdater : {},
        Taskperformernew: [],
        add_task
     }
  return (
    < TaskContext.Provider value = {value}>
         {children}
      </TaskContext.Provider>
  )
}

export const useTask=()=>{ 
    return useContext(TaskContext)}