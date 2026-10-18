import { Link } from 'react-router-dom'
import projects from '../projects.js'

function Projects(){
  
  return(
    <>
      {projects.map(task => (<Link to={`/projects/${task.id}`} key={task.id}>project {task.id}</Link>))}
      <p>Projects Page</p>
    </>
  )
}

export default Projects