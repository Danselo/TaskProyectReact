import { createContext } from 'react';
import { useLocalStorage } from "./userLocalStorage";
import { useState } from "react";
const TodoContext = createContext();

export function TodoProvider({children}){
    const {
        item : task,
        saveItem : savesTask,
        loading,
        error
      } = useLocalStorage('TASK_V1',[]);  //!  CALL TASK AND FUNCTION CUSTOM HOOK
    const totalTask = task.length;
    const [searchTaks, setSearchTaks] = useState("");  
    const completedTask = task.filter(task => 
      // las dos negaciones es para convertir en booleano en caso 
        !!task.completed 
    ).length; 
    //methods for tasks
    const searchValue = task.filter(task =>{
        const taskText = task.title.toLowerCase();
        const searchText = searchTaks.toLowerCase();
        return taskText.includes(searchText)
    } )
    
    
    const changeStateTask = (title) => {
    const taskIndex = task.findIndex(task => task.title === title);
    const newTask = [...task];
    newTask[taskIndex].completed = !newTask[taskIndex].completed;
    savesTask(newTask);
    }
    //save new todos
    const addTask = (title) => {
    const newTask = [...task];
    newTask.push({
        title,
        completed: false
    })
    savesTask(newTask);
    }
    const deleteTask = (title) => {
    const taskIndex = task.findIndex(task => task.title === title);
    const newTask = [...task];
    newTask.splice(taskIndex, 1);
    savesTask(newTask)
    }
    const [openModal, setOpenModal] = useState(false);


    return(
        <TodoContext.Provider value={{
            completedTask,
            totalTask,
            searchTaks,
            setSearchTaks,
            searchValue,
            deleteTask,
            changeStateTask,
            error,
            loading,
            openModal,
            setOpenModal,
            addTask
        }}>
            {children}
        </TodoContext.Provider>
    )
}
export {TodoContext}