import Task from "./Task";
function TaskList({ tasks, onUpdateTaskStatus }) {
  return (
    <div className="ml-5 mt-5">
      {tasks.map((task) => (
        <Task key={task.task_id} task={task} onUpdateTaskStatus={onUpdateTaskStatus} />
      ))}
    </div>
  );
}

export default TaskList;
