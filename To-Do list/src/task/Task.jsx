import './Task.css';
import { FaTrash } from "react-icons/fa6";
import { IoMdCheckboxOutline } from "react-icons/io";


const Task = ({Task , onDelete , checkTask}) => {

          
    return (
        <div style={{backgroundColor : Task.value ? `hsl(213, 47%, 75%)` : `hsl(213, 12.80%, 47.60%)` }} className='task'>
            <h1>
                {Task.title}
            </h1>


            <div>
                <IoMdCheckboxOutline onClick={() => checkTask(Task.id)}/>
                <FaTrash onClick={() =>onDelete(Task.id)} />
            </div>

        </div>

    )
}

export default Task ; 