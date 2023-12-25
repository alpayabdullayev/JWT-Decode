import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../context/userContext";

const Navbar = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <div>
      <ul>
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/signup"}>Sign Up</NavLink>
        </li>

        {user ? (
          <>
            <button onClick={() => setUser(null)}>Log out</button>
            <NavLink to={"/profile"}>Profile</NavLink>
          </>
        ) : (
          <li>
            <NavLink to={"/login"}>login</NavLink>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
