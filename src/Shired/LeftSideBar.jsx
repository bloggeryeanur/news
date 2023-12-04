import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideBar = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5555/news-category`)
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  return (
    <div>
      <h4>News : {category.length}</h4>
      <ul>
        {category.map(({ id, name }) => (
          <li key={id}>
            <Link to={`/category/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftSideBar;
