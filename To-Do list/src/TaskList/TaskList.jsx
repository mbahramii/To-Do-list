import Task from "../task/task";

const TaskList = ({tasks}) => {
    
    console.log(tasks);
    return (
        <div>
            {tasks.map((item) => {
            return <Task key={item.id} title={item.title} />
            })}
        </div>
    )
}

export default TaskList ; 