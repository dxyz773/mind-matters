import { useState } from "react";
import Category from "./Category";
import { categories } from "../../data/categoryTestData";
function CategoryList() {
  const [active, setActive] = useState(1);

  function handleActive(id) {
    setActive(id);
  }

  return (
    <div className="mx-3 my-3">
      {categories.map((current) => (
        <Category
          key={current.category}
          current={current}
          active={active}
          handleActive={handleActive}
        />
      ))}
    </div>
  );
}

export default CategoryList;
