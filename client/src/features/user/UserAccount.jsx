import { useLoaderData, useNavigate } from "react-router-dom";
import Auth from "../authentication/Auth";
import {
  AddUserTask,
  getAllTasks,
  getCategories,
  getUser,
  getUserTasks,
  updateTask,
} from "../../services/apiMindMatters";
import Dashboard from "./Dashboard";
import UserBio from "./UserBio";
import { useState } from "react";

function UserAccount() {
  const [categories, tasks, user, userTasks] = useLoaderData();
  const [categoryData, setCategoryData] = useState(categories.categories);
  const [taskData, setTaskData] = useState(tasks.tasks);
  const [userData, setUserData] = useState(user.user);
  const [userTaskData, setUserTaskData] = useState(userTasks.userTasks);

  const { isLoading, isAuthorized, username, userId } = Auth();

  const navigate = useNavigate();
  async function handleUpdateUserTaskStatus(userTask) {
    const updatedTask = await updateTask(userTask, userData.id);

    setUserTaskData(
      userTaskData.filter((task) => {
        return task.task_id === updatedTask.editTask.task_id
          ? (task.status = true)
          : task;
      }),
    );
  }
  async function handleAddTask(task_id) {
    const newUserTaskData = await AddUserTask(task_id, userData.id);
    const newTaskData = newUserTaskData.newTask;
    const returnedTask = taskData.find(
      (task) => task.task_id === newTaskData.task_id,
    );

    const newTask = {
      ...returnedTask,
      user_id: userData.id,
      status: false,
    };

    setUserTaskData(() => [...userTaskData, newTask]);
  }

  return (
    <div className="h-100 grid-rows-[auto_1fr_1fr grid grid-cols-[1fr_auto]">
      {isAuthorized ? (
        <>
          <Dashboard
            categories={categoryData}
            tasks={taskData}
            userTasks={userTaskData}
            onUpdateTaskStatus={handleUpdateUserTaskStatus}
            onAddTask={handleAddTask}
          />
          <UserBio userData={userData} />
        </>
      ) : (
        <>
          <h3>Please login or signup to track your wellness</h3>
          <button onClick={navigate("/login")}>Login</button>
          <button onClick={navigate("/signup")}>Signup</button>
        </>
      )}
    </div>
  );
}

export async function loader({ params }) {
  const categories = await getCategories();
  const tasks = await getAllTasks();
  const user = await getUser(params.userId);
  const userTasks = await getUserTasks(params.userId);
  return [categories, tasks, user, userTasks];
}
export default UserAccount;
