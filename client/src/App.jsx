import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from './layout';
import Home from './pages/home';
import Login from './pages/login';
import SignUp from './pages/signup';
import PrivateRoute from './routes/privateRoute';
import Profile from './pages/profile';

function App() {
  

  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='signup' element={<SignUp/>} />
            <Route element={<PrivateRoute/>}>
            <Route path={'/profile'} element={<Profile/>}/>
            </Route>
          </Route>
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
