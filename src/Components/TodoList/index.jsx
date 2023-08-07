export function TodoList(props){
    return(
        <ul className="task-list">
            {props.children}
        </ul>
    )
}