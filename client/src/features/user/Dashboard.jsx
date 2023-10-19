import CategoryList from "../wellness-tracker/CategoryList";
import HighlightList from "./HighlightList";

function Dashboard() {
  return (
    <div className="grid grid-cols-[auto_1fr]">
      <CategoryList />
      <HighlightList />
    </div>
  );
}

export default Dashboard;
