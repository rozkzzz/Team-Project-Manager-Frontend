import { useParams,Link } from 'react-router-dom';
import projects from '../projects';

function ProjectDetail() {
 let { id } = useParams();
 
 let right_project = projects.find((project)=>project.id === Number(`${id}`));
 if(right_project === undefined)
    return <p>Project Not Found</p>
 
 return <>
 {right_project.name}
 <Link to="/projects">projects</Link>
 </>;
}
export default ProjectDetail