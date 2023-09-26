import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/Logo.png";
const Header = () => {
  return (
    <div>
      <nav className="w-10/12 mx-auto flex flex-col md:flex-row items-center justify-between py-6 absolute left-0 right-0 top-0 z-10">
        <Link to="/">
          <img src={logo} className="w-[180px] cursor-pointer" alt="" />
        </Link>
        <ul className="flex gap-4 md:gap-7 font-medium mt-7 md:mt-0">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-red-400 border-b-[2px] border-red-400" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/donation"
              className={({ isActive }) =>
                isActive ? "text-red-400 border-b-2 border-red-400" : ""
              }
            >
              Donation
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/statistics"
              className={({ isActive }) =>
                isActive ? "text-red-400 border-b-2 border-red-400" : ""
              }
            >
              Statistics
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
