function TaskItem({id,title,status,nextStatus,deleteTask}){
  return(
    <>
      <p>{id}. {title} - {status}</p>
      <button onClick={()=>nextStatus(id)}>Change Status</button>
      <button onClick={()=>deleteTask(id)}>Delete</button>
    </>
  )
}

export default TaskItem