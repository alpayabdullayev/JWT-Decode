import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/userContext'
import axios from "axios"

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {setUser} = useContext(UserContext)

    
  const navigate = useNavigate(); 

    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            
          const response = await axios.post("http://localhost:9000/api/login/", {
            username: username,
            password: password,
          });
    
          console.log("daxil oldu", response.data.token);
          localStorage.setItem("t",response.data.token)
          setUser({username,password})
          navigate("/profile")
        } catch (error) {
          console.error(error);
        }
      };
  return (
<>
<form action="" onSubmit={handleLogin}>
    <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder="username" /> <br />
    <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="password" /> <br />
    <button type='submit'> submit</button>
</form>
</>
  )
}

export default Login
