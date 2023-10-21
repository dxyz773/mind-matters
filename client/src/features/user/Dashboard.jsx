import CategoryList from "../wellness-tracker/CategoryList";
import Tracker from "../wellness-tracker/Tracker";
function Dashboard() {
  return (
    <div className="grid grid-cols-[auto_1fr]">
      <CategoryList />
      <Tracker />
    </div>
  );
}

export default Dashboard;
