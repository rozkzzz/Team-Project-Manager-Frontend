function TaskForm({addTask,setTitle,title,error}){
  return(
    <>
      <form onSubmit={addTask}>
        <label>
          Task title:
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>

        <p>title is {title}</p>
        {error && <p>{error}</p>}
        <input type="submit" value="Submit" />
      </form>
    </>
  )
}

export default TaskForm