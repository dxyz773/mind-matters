import TaskList from "./TaskList";

function ToDos({ tasks }) {
  return (
    <div className="h-96 w-96 rounded-2xl bg-yellow-200">
      <h3 className="text-md ml-5 mt-4 font-bold uppercase tracking-wide">
        Wellness To Do&apos;s
      </h3>
      <TaskList tasks={tasks} />
    </div>
  );
}

export default ToDos;
