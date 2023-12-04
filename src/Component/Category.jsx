import { useLoaderData } from "react-router-dom";
import CompnentCard from "./CompnentCard";

const Category = () => {
  const getCata = useLoaderData();

  return (
    <div>
      <h4> Category : {getCata.length}</h4>
      <ul>
        {getCata.map((single) => (
          <CompnentCard key={single._id} single={single}></CompnentCard>
        ))}
      </ul>
    </div>
  );
};

export default Category;
