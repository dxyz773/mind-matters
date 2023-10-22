import TaskList from "./TaskList";

function ToDos({ tasks, onUpdateTaskStatus }) {
  return (
    <div className="h-96 w-[415px] rounded-2xl bg-yellow-200 shadow-md">
      <h3 className="text-md ml-5 mt-4 font-bold uppercase tracking-wide">
        Wellness To Do&apos;s
      </h3>
      <TaskList tasks={tasks} onUpdateTaskStatus={onUpdateTaskStatus} />
    </div>
  );
}

export default ToDos;
