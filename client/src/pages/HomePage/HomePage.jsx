import { useAuth } from 'context/AuthContext';
import LoginPage from 'pages/LoginPage/LoginPage';
import React from 'react';

function HomePage() {
  const { user } = useAuth();

  return <LoginPage />;
}

export default HomePage;
