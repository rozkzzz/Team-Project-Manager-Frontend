import './App.css'
import ProjectHeader from './ProjectHeader.jsx'
import {useState} from 'react';


function App() {
  const projectName="Website Redesign";
  const [status,setStatus]=useState('Active');

  
  return (
    <>
        <h1>Team Project Manager</h1>
        <ProjectHeader projectName={projectName} status={status} />
        <button type="button" onClick={()=>setStatus('Complete')}>Change Status</button>
        
    </>
  )
}


export default App
