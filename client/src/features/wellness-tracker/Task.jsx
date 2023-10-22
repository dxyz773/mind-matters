function Task({ task, onUpdateTaskStatus }) {
  function handleCompleteTask() {
    const updatedTask = { ...task, status: true };
    onUpdateTaskStatus(updatedTask);
  }
  console.log(task);
  return (
    <div className="flex">
      <p className="mb-3 mr-2 rounded-xl bg-[#fff] px-2 py-1 text-xs font-medium tracking-wide shadow-md transition-all duration-300">
        {task.task}
      </p>
      {task.status === true ? (
        <p className="mt-1 flex hover:scale-125">✅</p>
      ) : (
        <button
          className="mt-1 flex hover:scale-125"
          onClick={handleCompleteTask}
        >
          ☑️
        </button>
      )}
    </div>
  );
}

export default Task;
