import { useContext } from "react"
import {TodoContext} from "../TodoContext"
export  function TodoTitle() {
  //create a new Context for call the information 
  const {
    completedTask,
    totalTask,
  } = useContext(TodoContext)
  return (
        <h1 className='title_taks'>Has completado {completedTask} de {totalTask} Tareas</h1>
  )
}
