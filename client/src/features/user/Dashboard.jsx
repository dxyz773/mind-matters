import CategoryList from "../wellness-tracker/CategoryList";
import Tracker from "../wellness-tracker/Tracker";

function Dashboard({
  categories,
  tasks,
  userTasks,
  onUpdateTaskStatus,
  onAddTask,
}) {
  return (
    <div className="grid grid-cols-[auto_1fr]">
      <CategoryList
        categories={categories}
        tasks={tasks}
        onAddTask={onAddTask}
      />
      <Tracker userTasks={userTasks} onUpdateTaskStatus={onUpdateTaskStatus} />
    </div>
  );
}

export default Dashboard;
