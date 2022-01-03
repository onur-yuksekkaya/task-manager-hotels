import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from 'context/AuthContext';

export default function NonUserRoute() {
  const { user } = useAuth();

  if (user) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
}
