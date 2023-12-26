import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../context/userContext";

const Navbar = () => {
  const { user, setUser,role,setRole,setToken } = useContext(UserContext);
  const removeStorage = () => {
    
    localStorage.removeItem('token'); 
    localStorage.removeItem('role'); 
    setToken(null);
    setRole(null);
  };
  return (
    <div className="wrapper">
      <ul className="flex  gap-8">
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/signup"}>Sign Up</NavLink>
        </li>

        {role ? (
          <>
            <button onClick={() => removeStorage()}>Log out</button>
            <NavLink to={"/profile"}>Profile</NavLink>
          </>
        ) : (
          <li>
            <NavLink to={"/login"}>login</NavLink>
          </li>
        )}
        {role ==="admin"?
          <li>
          <NavLink to={"/admin"}>admin</NavLink>
        </li>
        :null}
      </ul>
    </div>
  );
};

export default Navbar;
