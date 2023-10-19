const API_URL = "http://localhost:3001";

export async function getCategories() {
  try {
    const res = await fetch(`${API_URL}/categories`);
    if (!res.ok) throw Error();
    const { data } = await res.json();
    return data;
  } catch (error) {
    Error("Failed to fetch wellness categories");
  }
}
