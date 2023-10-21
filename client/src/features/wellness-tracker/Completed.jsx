import TaskList from "./TaskList";

function Completed({ tasks }) {
  return (
    <div className="h-96 w-96 rounded-2xl bg-green-300">
      <h3 className="text-md ml-5 mt-4 font-bold uppercase tracking-wider">
        Completed Tasks
      </h3>
      <TaskList tasks={tasks} />
    </div>
  );
}

export default Completed;
