import { useData } from "../../context/data-context";
import "./Categories.css";

const Categories = () => {
  const { category } = useData();

  return (
    <div className="flex-row-sb-start p-1">
      {category.map(({_id, categoryName}) => (
        <button key={_id} className="text-regular chips m-sm p-sm">{categoryName}</button>
      ))}

      {/* <button className="text-regular chips m-sm p-sm">
                Training
            </button>
            <button className="text-regular chips m-sm p-sm">
                Adoption
            </button> */}
    </div>
  );
};

export { Categories };