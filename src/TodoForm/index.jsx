import { useContext, useState } from "react";
import './TodoForm.css'
import { TodoContext } from "../Components/TodoContext";
export function TodoForm(){
    //create a local state
    const [newCreateTask, setNewCreateTask] = useState("");
    const{
        addTask,
        setOpenModal
    } = useContext(TodoContext)
    const onSubmit = (e)=>{
        e.preventDefault();
        setOpenModal(false);
        addTask(newCreateTask);
    }
    const onCancel = (e) => {
        e.preventDefault();
        setOpenModal(false);
    }
    const onChange = (e) => {
        setNewCreateTask(e.target.value)
    }
    return (
        <form className="formContainer" onSubmit={onSubmit}>
            <label className="FormContainer--label">Digita tu tarea </label>
            <textarea name="" id="" cols="20" rows="5" placeholder="Cortar cebolla" onChange={onChange} value={newCreateTask}></textarea>
            <div className="formContainer-button">
                <button className="formContainer-button formContainer-button_cancel" onClick={onCancel} type="">Cancelar</button>
                <button className="formContainer-button formContainer-button_accept" type="submit">Aceptar</button>
            </div>
        </form>
    )
}