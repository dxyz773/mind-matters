import Task from "./Task";
function TaskList({ tasks }) {
  return (
    <div>
      {tasks.map((task) => (
        <Task key={task.task_id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
