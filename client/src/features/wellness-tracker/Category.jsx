import { useEffect, useState } from "react";
const API_URL = "http://localhost:3001";

function Category({ current, active, handleActive }) {
  const { id, category } = current;
  const [tasks, setTasks] = useState("10 minute meditation");

  useEffect(
    function () {
      async function getTasksByCategory(id) {
        try {
          const res = await fetch(`${API_URL}/categories/${id}`);
          if (!res.ok) throw Error();

          const { data } = await res.json();
          setTasks(data);
        } catch (err) {
          Error(`Failed to fetch tasks by ${id}`);
        }
      }
      getTasksByCategory(id);
    },
    [id],
  );
  return (
    <div
      className="collapse-plus bg-base-200 collapse"
      onChange={() => handleActive(id)}
    >
      <input
        type="radio"
        name="my-accordion-3"
        readOnly
        checked={active === id ? "checked" : ""}
      />
      <div className="collapse-title text-xl font-medium">{category}</div>
      <div className="collapse-content flex gap-2">
        <p>{tasks}</p>
        <button className="w-5 rounded-full bg-yellow-200">+</button>
      </div>
    </div>
  );
}

export default Category;
