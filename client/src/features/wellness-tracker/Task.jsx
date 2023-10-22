function Task({ task, onUpdateTaskStatus }) {
  function handleCompleteTask() {
    const updatedTask = { ...task, status: true };
    onUpdateTaskStatus(updatedTask);
  }
  return (
    <div className="flex gap-3">
      <p className="mb-3 rounded-xl bg-[#fff] px-2 py-1">{task.task}</p>
      {task.status === true ? (
        <p className="mt-1 flex">✅</p>
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
