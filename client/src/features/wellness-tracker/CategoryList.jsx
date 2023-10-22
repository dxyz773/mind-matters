import Category from "./Category";

import { useState } from "react";

function CategoryList({ categories, tasks, onAddTask }) {
  const [active, setActive] = useState(1);

  function handleChange(id) {
    setActive(id);
  }
  return (
    <div className="mx-3 my-3">
      {categories.map((current) => (
        <Category
          key={current.category}
          current={current}
          active={active}
          tasks={tasks}
          handleActive={handleChange}
          onAddTask={onAddTask}
        />
      ))}
    </div>
  );
}

export default CategoryList;
