import { useState } from "react";
import Category from "./Category";
import { categories } from "../../data/categoryTestData";
// import { useLoaderData } from "react-router-dom";
function CategoryList() {
  // const categories = useLoaderData()
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

// export async function loader() {
//   const categories = await getCategories();
//   return categories;
// }

export default CategoryList;
