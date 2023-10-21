const API_URL = `https://mindmatters-backend.onrender.com`;

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

export async function getUser(id) {
  try {
    const res = await fetch(`${API_URL}/users/1`);
    if (!res.ok) throw Error();
    const data = await res.json();
    return data;
    s;
  } catch (error) {
    Error("Failed to fetch user");
  }
}

export async function getUserTasks(id) {
  try {
    const res = await fetch(`${API_URL}/users/1/tasks`);
    if (!res.ok) throw Error();
    const data = await res.json();
    return data;
  } catch (error) {
    Error("Failed to fetch user tasks");
  }
}
