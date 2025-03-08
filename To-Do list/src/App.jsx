import { useState} from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import AddTargets from './AddTasks/AddTasks'
import TaskList from './TaskList/TaskList'
import AddTasks from './AddTasks/AddTasks'

function App() {
  const [tasks , setTasks] = useState ([
    {id:1 , title : "book1" ,value: true},
    {id:2 , title : "book2" ,value: true},
    {id:3 , title : "book3" , value: true},
    {id:4 , title : "book4" , value: true},
  ])


  const addTasks=(title) => {

    const id = Math.floor(Math.random()*10000)

    const newTask =  { id , ...title, value: true }
    
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
    <>
      <AddTasks  onAdd={addTasks} />
      <TaskList tasks={tasks} onDelete={deleteTask}   checkTask={checkTask}  />
    </>
  )
}

export default App
