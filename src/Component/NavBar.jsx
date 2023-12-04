import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <h1>
      <Link to={"/"}>
        <h2 className="bg-dark p-5 text-center">Home</h2>
      </Link>
    </h1>
  );
};

export default NavBar;
