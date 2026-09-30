import './App.css'
import ProjectHeader from './ProjectHeader.jsx'
import {useState} from 'react';
import TaskItem from './TaskItem.jsx'

function App() {
  const projectName="Website Redesign";
  const [status,setStatus]=useState(true);
  const [tasks,setTasks] = useState([
      { id: 1, title: 'Design Homepage', status: 'todo' },
      { id: 2, title: 'Create API', status: 'doing' },
      { id: 3, title: 'Deploy Website', status: 'done' }
  ])
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


  return (
    <>
        <h1>Team Project Manager</h1>
        <ProjectHeader projectName={projectName} status={status ? 'Active':'Complete'} />
        <button type="button" onClick={()=>setStatus(status=>!status)}>Change Status</button>
        <p>Task title</p><input></input><button type="button" >addTask</button>
        {
  
  tasks.map(task => (
    <TaskItem key={task.id} id={task.id} title={task.title} status={task.status} nextStatus={ChangeStatus}/>
  ))
}
    </>
  )
}



export default App
