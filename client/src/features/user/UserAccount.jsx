import { useLoaderData } from "react-router-dom";
import {
  getAllTasks,
  getCategories,
  getUser,
  getUserTasks,
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
  console.log(userData);
  return (
    <div className="h-100 grid grid-cols-[1fr_auto] grid-rows-[auto_1fr_1fr]">
      <Dashboard
        categories={categoryData}
        tasks={taskData}
        userTasks={userTaskData}
      />
      <UserBio userData={userData} />
    </div>
  );
}

export async function loader({ params }) {
  const categories = await getCategories();
  const tasks = await getAllTasks();
  const user = await getUser();
  const userTasks = await getUserTasks();
  return [categories, tasks, user, userTasks];
}
export default UserAccount;
