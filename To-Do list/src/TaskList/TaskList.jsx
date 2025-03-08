import Task from "../task/task";

const TaskList = ({tasks , onDelete , checkTask}) => {
    
    console.log(tasks);
    return (
        <div>
            {tasks.map((item) => {
            return <Task key={item.id} Task={item} onDelete={onDelete} checkTask={checkTask} />
            })}
        </div>
    )
}

export default TaskList ; 