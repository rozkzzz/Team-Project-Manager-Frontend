import TaskItem from './TaskItem.jsx'

function TaskList({showTasks,deleteTask,nextStatus}){
  return(
    <>
      {showTasks.map(task => (
        <TaskItem
          key={task.id}
          id={task.id}
          title={task.title}
          status={task.status}
          nextStatus={nextStatus}
          deleteTask={deleteTask}
        />
      ))}
    </>
  )
}

export default TaskList