import { useState } from "react"
import './AddTasks.css'

const AddTasks = ({onAdd}) => {
    const [title , setTitle] = useState ('')

    const submitForm = (event)=> {
        event.preventDefault()
        

        if (title.trim()) {
        onAdd({title})
         }
        
        setTitle("")
    } 

    return (
        <div className="div_addtasks">
            <form onSubmit={submitForm}> 
                {/* <div> */}
                    <input type="text" 
                    placeholder="add task" 
                    value={title}  
                    onChange={(e) => setTitle(e.target.value)}/>
                {/* </div> */}
                {/* <div> */}

                <button type="submit">
                    add
                </button>
                {/* </div> */}
            </form>
        </div>
    )
}

export default AddTasks;