function Category({ current, active, handleActive, tasks, onAddTask }) {
  const { id, category } = current;
  const activeTasks = tasks.filter((task) => task.category_id === active);

  function handleAddTask(task_id) {
    onAddTask(task_id);
  }
  return (
    <div
      className="collapse collapse-plus border border-stone-200 bg-base-200 shadow-md"
      onChange={() => handleActive(id)}
    >
      <input
        type="radio"
        name="my-accordion-3"
        readOnly
        checked={active === id ? "checked" : ""}
      />
      <div className="collapse-title text-xl font-medium">{category}</div>
      <div className="collapse-content flex flex-col gap-2">
        {activeTasks.map((task) => (
          <div key={task.task_id} className="flex justify-between">
            <p className="mr-3"> {task.task}</p>
            <button
              onClick={() => handleAddTask(task.task_id)}
              className="w-5 rounded-full bg-yellow-200 hover:bg-yellow-300"
            >
              +
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
