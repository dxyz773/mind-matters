import Task from "./Task";
function TaskList({ tasks, onUpdateTaskStatus }) {
  return (
    <div className="ml-3 mt-5 grid grid-cols-2 gap-x-3">
      {tasks.map((task) => (
        <Task
          key={task.task_id}
          task={task}
          onUpdateTaskStatus={onUpdateTaskStatus}
        />
      ))}
    </div>
  );
}

export default TaskList;
