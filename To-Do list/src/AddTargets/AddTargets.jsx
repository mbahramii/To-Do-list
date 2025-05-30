import { useState } from "react"

const AddTargets = ({onAdd}) => {
    const [title , setTitle] = useState ('')

    const submitForm = (event)=> {
        event.preventDefault()
        
        onAdd({title})
        
        setTitle(' ')
    } 

    return (
        <div>
            <form onSubmit={submitForm}> 
                <div>
                    <input type="text" 
                    placeholder="add target" 
                    value={title}  
                    onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <button type="submit">
                    Add
                </button>
            </form>
        </div>
    )
}

export default AddTargets;