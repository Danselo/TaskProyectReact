import { TodoContext } from "../TodoContext"
import { useContext } from "react"
function TodoButtonAdd() {
  const {
    openModal,
    setOpenModal
  } = useContext(TodoContext)
  return (
        <button className="add-item-modal" onClick={()=> {
          setOpenModal(!openModal);
        }}>Agregar</button>
  )
}

export  {TodoButtonAdd}
