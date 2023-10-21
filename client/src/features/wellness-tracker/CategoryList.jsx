import Category from "./Category";

import { useState } from "react";

function CategoryList({ categories, tasks }) {
  const [active, setActive] = useState(1);
  // const currentTasks
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
        />
      ))}
    </div>
  );
}

export default CategoryList;
