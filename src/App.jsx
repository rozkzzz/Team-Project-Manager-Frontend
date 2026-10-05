import './App.css'
import ProjectHeader from './ProjectHeader.jsx'
import { useState, useEffect } from 'react'
import TaskItem from './TaskItem.jsx'


function App() {
  
  const projectName="Website Redesign";
  const [status,setStatus]=useState(true);
  const [tasks,setTasks] = useState([
      { id: 1, title: 'Design Homepage', status: 'todo' },
      { id: 2, title: 'Create API', status: 'doing' },
      { id: 3, title: 'Deploy Website', status: 'done' }
  ])
  
  let max = tasks.length === 0 ? 1:Math.max(...tasks.map(task=>task.id))+1;
  const [title,setTitle] = useState('');
  useEffect(() => {
  console.log('tasks เปลี่ยน:', tasks)
}, [tasks])
  function ChangeStatus(id){
    let newTask = tasks.map(function(task){
        if(task.id === id){
          if (task.status === 'todo')
            return {...task,status:'doing'}
          else if (task.status === 'doing')
            return {...task,status:'done'}
          else if (task.status === 'done')
            return {...task,status:'todo'}
        
        }else
          return task
    })
    setTasks(newTask);
  }
  function addTask(e){
      e.preventDefault();
      let newTask = {id:max,title:title,status:'todo'}
      setTasks([...tasks,newTask]);
      setTitle("");
    }

  function deleteTask(id){
  const newTasks = tasks.filter(task => task.id !== id);

  console.log("id ที่จะลบ:", id);
  console.log("tasks ก่อนลบ:", tasks);
  console.log("tasks หลัง filter:", newTasks);

  setTasks(newTasks);
}

  return (
    <>
        <h1>Team Project Manager</h1>
        <ProjectHeader projectName={projectName} status={status ? 'Active':'Complete'} />
        <button type="button" onClick={()=>setStatus(status=>!status)}>Change Status</button>
        
        <form onSubmit={addTask}>
          <label>Task title:<input value={title} onChange={(e)=>setTitle(e.target.value)}></input></label>
          <p>title is {title}</p>
          <input type="submit" value="Submit"></input>        
        </form>
        {tasks.map(task => (
          <TaskItem key={task.id} id={task.id} title={task.title} status={task.status} nextStatus={ChangeStatus} deleteTask={deleteTask}/>
        ))}  
    </>
  )
}



export default App
