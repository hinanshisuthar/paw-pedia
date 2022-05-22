import { useData } from "../../context/data-context";
import "./Categories.css";

const Categories = () => {
  const { category, dispatch } = useData();

  return (
    <div className="flex-row-sb-start p-1">
      {category.map(({ _id, categoryName, isActive }) => (
        <button
          key={_id}
          className={`text-regular chips m-sm p-sm ${
            isActive && "active-chips"
          }`}
          onClick={() =>
            dispatch({ type: "FILTER_CATEGORY", payload: categoryName })
          }
        >
          {categoryName}
        </button>
      ))}
    </div>
  );
};

export { Categories };
