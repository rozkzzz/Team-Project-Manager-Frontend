function TaskItem({id,title,status}){
  return(
    <>
      <p>{id}. {title} - {status}</p><button>Change Status</button>
    </>
  )
}

export default TaskItem