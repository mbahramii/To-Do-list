import './Task.css'

const Task = ({Task , onDelete}) => {

          
    return (
        <div className='task'>
            <h1>{Task.title}</h1>
            <button onClick={() =>onDelete(Task.id)}>
                click
            </button>
        </div>

    )
}

export default Task ; 