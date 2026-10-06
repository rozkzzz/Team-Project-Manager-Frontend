import './App.css'
import ProjectHeader from './ProjectHeader.jsx'
import { useEffect, useState } from 'react'
import TaskItem from './TaskItem.jsx'

function App() {
  const projectName = "Website Redesign"
  const [status, setStatus] = useState(true);
  const [filter, setFilter] = useState('all');
  const [tasks, setTasks] = useState(() => {
    const load = JSON.parse(localStorage.getItem('job'))

    if (load !== null)
      return load
    else
      return []
  })

  useEffect(() => {
    localStorage.setItem('job', JSON.stringify(tasks))
  }, [tasks])

  const [title, setTitle] = useState('')

  const max = tasks.length === 0
    ? 1
    : Math.max(...tasks.map(task => task.id)) + 1

  function ChangeStatus(id) {
    const newTasks = tasks.map(function (task) {
      if (task.id === id) {
        if (task.status === 'todo')
          return { ...task, status: 'doing' }
        else if (task.status === 'doing')
          return { ...task, status: 'done' }
        else if (task.status === 'done')
          return { ...task, status: 'todo' }
      } else {
        return task
      }
    })

    setTasks(newTasks)
  }

  function addTask(e) {
    e.preventDefault();
    let newTask ={};
    if (title.trim() === '')
      return
    else{
      newTask = {
      id: max,
      title: title.trim(),
      status: 'todo'
    }}

    setTasks([...tasks, newTask])
    setTitle("")
  }

  function deleteTask(id) {
    const newTasks = tasks.filter(task => task.id !== id)

    console.log("id ที่จะลบ:", id)
    console.log("tasks ก่อนลบ:", tasks)
    console.log("tasks หลัง filter:", newTasks)

    setTasks(newTasks)
  }
  let showTasks
  if (filter === 'all')
    showTasks = tasks
  else
    showTasks = tasks.filter((task)=>{
          return task.status === filter; 
    });
  return (
    <>
      <h1>Team Project Manager</h1>

      <ProjectHeader
        projectName={projectName}
        status={status ? 'Active' : 'Complete'}
      />

      <button
        type="button"
        onClick={() => setStatus(status => !status)}
      >
        Change Status
      </button>

      <button
        type="button"
        onClick={() => setFilter('all')}
      >
        All
      </button>

      <button
        type="button"
        onClick={() => setFilter('todo')}
      >
        Todo
      </button>

      <button
        type="button"
        onClick={() => setFilter('doing')}
      >
        Doing
      </button>

      <button
        type="button"
        onClick={() => setFilter('done')}
      >
        Done
      </button>
      
      <form onSubmit={addTask}>
        <label>
          Task title:
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>

        <p>title is {title}</p>
        <input type="submit" value="Submit" />
      </form>
      
      {showTasks.map(task => (
        <TaskItem
          key={task.id}
          id={task.id}
          title={task.title}
          status={task.status}
          nextStatus={ChangeStatus}
          deleteTask={deleteTask}
        />
      ))}
    </>
  )
}

export default App