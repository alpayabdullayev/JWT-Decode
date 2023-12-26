
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/userContext';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setUser, setRole, setToken } = useContext(UserContext);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:9000/api/login/', {
        username: username,
        password: password,
      });

      localStorage.setItem('token', response.data.token);
      
      const decoded = jwtDecode(response.data.token);
      localStorage.setItem('role', decoded.role)
      setUser(decoded.userName);
      setToken(response.data.token);
      setRole(decoded.role);
      navigate('/profile');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
    <div className="wrapper py-10">
    <form action="" onSubmit={handleLogin} className=''>
       <div className='flex gap-8 '>
       <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="username"
          className=' outline-none border border-solid border-black '
        />
        <br />
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
          className=' outline-none border border-solid border-black '
        />
        <br />
       </div>
        <button type="submit" className="px-4 py-2 my-4 bg-emerald-500 text-white">Sign Up</button>
      </form>
    </div>
      
    </>
  );
};

export default Login;
