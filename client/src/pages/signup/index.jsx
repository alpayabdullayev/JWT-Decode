import React, { useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
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

      console.log("Decoded Token:", decoded);

      navigate("/profile");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form onSubmit={createUser}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUp;
