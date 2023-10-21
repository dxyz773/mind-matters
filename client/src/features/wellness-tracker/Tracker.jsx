import Completed from "./Completed";
import ToDos from "./ToDos";
function Tracker({ userTasks }) {
  const toDo = userTasks.filter((task) => task.status === false);
  const complete = userTasks.filter((task) => task.status === true);

  return (
    <div>
      <h4 className="mb-7 mt-6 text-center text-3xl font-semibold">
        Wellness Tracker
      </h4>
      <div className="flex justify-center gap-7">
        <ToDos tasks={toDo} />
        <Completed tasks={complete} />
      </div>
    </div>
  );
}

export default Tracker;
