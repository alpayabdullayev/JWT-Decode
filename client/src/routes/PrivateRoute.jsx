import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { UserContext } from '../context/userContext';

const PrivateRoute = ({ roles }) => {
  const { role } = useContext(UserContext);

 
  const isAuthorized = roles.includes(role);

  return isAuthorized ? <Outlet /> : <Navigate to={'/login'} />;
 
};

export default PrivateRoute;
