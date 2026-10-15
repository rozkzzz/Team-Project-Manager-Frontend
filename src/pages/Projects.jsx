import { Link } from 'react-router-dom'
let projects = [
  {id:1,name:'fox'},
  {id:2,name:'dog'},
  {id:3,name:'fish'}
];

function Projects(){
  return(
    <>
      projects.map(task => (<Link to="/projects/${task.id}">project {task.id}</Link>))
      <p>Projects Page</p>
    </>
  )
}

export default Projects