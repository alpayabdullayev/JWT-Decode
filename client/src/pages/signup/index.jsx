import React, { useContext, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const {setUser,setToken}  = useContext(UserContext)
  const navigate = useNavigate();

  async function createUser(e) {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:9000/api/register/", {
        username: username,
        password: password,
      });

      console.log("user yarandi", response.data);
      const token = response.data.token;
      const decoded = jwtDecode(token);
      setToken(token)
      setUser(decoded)

      console.log("Decoded Token:", decoded);
      
      navigate("/profile");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="wrapper py-10" >
        <form onSubmit={createUser}>
      <div className="flex gap-8">
      <input
        type="text"
        value={username}
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
        className=' outline-none border border-solid border-black '
      />
      <input
        type="text"
        value={password}
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
        className=' outline-none border border-solid border-black '
      />
      </div>
      <button type="submit" className="px-4 py-2 my-4 bg-emerald-500 text-white">Sign Up</button>
    </form>
    </div>
    
  );
};

export default SignUp;
