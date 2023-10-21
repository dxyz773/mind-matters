import CategoryList from "../wellness-tracker/CategoryList";
import Tracker from "../wellness-tracker/Tracker";
function Dashboard({ categories, tasks, userTasks }) {
  return (
    <div className="grid grid-cols-[auto_1fr]">
      <CategoryList categories={categories} tasks={tasks} />
      <Tracker userTasks={userTasks} />
    </div>
  );
}

export default Dashboard;
