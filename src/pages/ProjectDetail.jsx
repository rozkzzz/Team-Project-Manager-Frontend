import { useParams,Link } from 'react-router-dom';

function ProjectDetail() {
 let { id } = useParams();
 
 return <>
 {id}
 <Link to="/projects">projects</Link>
 </>;
}
export default ProjectDetail