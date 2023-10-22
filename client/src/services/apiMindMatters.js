const API_URL = `https://mindmatters-backend.onrender.com`;

// ----------- FETCH ALL CATEGORIES ---------- //

export async function getCategories() {
  try {
    const res = await fetch(`${API_URL}/categories`);
    if (!res.ok) throw Error();
    const data = await res.json();
    return data;
  } catch (error) {
    Error("Failed to fetch categories");
  }
}

// ----------- FETCH ALL TASKS ---------- //

export async function getAllTasks() {
  try {
    const res = await fetch(`${API_URL}/tasks`);
    if (!res.ok) throw Error();
    const data = await res.json();
    return data;
  } catch (error) {
    Error("Failed to fetch  tasks");
  }
}

// ----------- FETCH USER ---------- //

export async function getUser(user_id) {
  try {
    const res = await fetch(`${API_URL}/users/1`);
    if (!res.ok) throw Error();
    const data = await res.json();
    return data;
  } catch (error) {
    Error("Failed to fetch user");
  }
}

// ----------- FETCH USER TASKS ---------- //
export async function getUserTasks(user_id) {
  try {
    const res = await fetch(`${API_URL}/users/1/tasks`);
    if (!res.ok) throw Error();
    const data = await res.json();
    return data;
  } catch (error) {
    Error("Failed to fetch user tasks");
  }
}
// ----------- UPDATE USER TASK ---------- //

export async function updateTask(task) {
  // const user_id = task.user_id;
  const taskId = task.task_id;
  const status = task.status;

  try {
    const res = await fetch(`${API_URL}/users/1/tasks`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ taskId, status }),
    });
    if (!res.ok) throw Error();
    const data = await res.json();

    return data;
  } catch (error) {
    Error("Failed to fetch categories");
  }
}

// ----------- ADD USER TASK ---------- //

export async function AddUserTask(task_id) {
  // const user_id = task.user_id;
  const taskId = task_id;

  try {
    const res = await fetch(`${API_URL}/users/1/tasks`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ taskId }),
    });
    if (!res.ok) throw Error();
    const data = await res.json();

    return data;
  } catch (error) {
    Error("Failed to fetch categories");
  }
}
