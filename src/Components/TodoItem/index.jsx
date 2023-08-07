export function TodoItem({title,completed, onComplete, onDelete}) {
  
  return (
    <li className="task-list__item">
      {completed 
      ?<span className="task-list__item-check--active task-list__item-check" onClick={onComplete}><i className="fa-solid fa-circle-check fa-xl"></i></span> 
      : <span className="task-list__item-check" onClick={onComplete}><i className="fa-regular fa-circle fa-xl"></i></span>}
        
        {completed ? <p className="paragragh-taks paragragh-taks--active">{title}</p> : <p className="paragragh-taks">{title}</p>}
        

        <span className="task-list__item-delete" onClick={onDelete}><i className="fa-solid fa-xmark fa-xl"></i></span>
    </li>
  )
}
