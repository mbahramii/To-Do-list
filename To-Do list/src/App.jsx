import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import AddTargets from './AddTasks/AddTasks'
import TaskList from './TaskList/TaskList'
import AddTasks from './AddTasks/AddTasks'

function App() {
  const [tasks , setTasks] = useState ([
    {id:1 , title : "book1"},
    {id:2 , title : "book2"},
    {id:3 , title : "book3"},
    {id:4 , title : "book4"},
  ])

  const addTasks=(event) => {
    
  }

  return (
    <>
      <AddTasks  nAdd={addTasks} />
      <TaskList tasks={tasks} />
    </>
  )
}

export default App
