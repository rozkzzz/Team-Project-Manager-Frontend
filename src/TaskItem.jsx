function TaskItem({id,title,status,nextStatus}){
  return(
    <>
      <p>{id}. {title} - {status}</p>
      <button onClick={()=>nextStatus(id)}>Change Status</button>
    </>
  )
}

export default TaskItem