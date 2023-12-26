import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout";
import Home from "./pages/home";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import PrivateRoute from "./routes/privateRoute";
import Profile from "./pages/profile";
import Admin from "./pages/admin";
import AdminLayout from "./layout/adminLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
            <Route element={<PrivateRoute roles={['user', 'admin']} />}>
              <Route path={"/profile"} element={<Profile />} />
            </Route>
          </Route>
          <Route path={"/admin"} element={<AdminLayout />}>
            <Route element={<PrivateRoute roles={['admin']} />}>
              <Route index element={<Admin />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
