import { useState} from 'react'
import './App.css'
import TaskList from './TaskList/TaskList'
import AddTasks from './AddTasks/AddTasks'

function App() {
  const [tasks , setTasks] = useState ([
    {id:1 , title : "book1" ,value: false},
    {id:2 , title : "book2" ,value: false},
    {id:3 , title : "book3" , value: false},
    {id:4 , title : "book4" , value: false},
  ])


  const addTasks=(title) => {

    const id = Math.floor(Math.random()*10000)

    const newTask =  { id , ...title, value:false }
    
    setTasks([...tasks, newTask])
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((item) => item.id !== id))
  } 

  
    const checkTask = (id) => {
      setTasks(
        tasks.map((task) =>
          task.id === id ? { ...task, value: !task.value } : task
        )
      );
    };


  return (
    <div className='main'>
      <AddTasks  onAdd={addTasks} />
      <TaskList tasks={tasks} onDelete={deleteTask} checkTask={checkTask}  />
    </div>
  )
}

export default App
