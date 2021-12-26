import { useAuth } from 'context/AuthContext';
import LoginPage from 'pages/LoginPage/LoginPage';
import React from 'react';
import { Outlet } from 'react-router-dom';
import ContentContainer from './components/ContentContainer';

function MainPage() {
  const { user } = useAuth();

  return (
    <div className="w-screen h-screen bg-red-500">
      YEah
      <ContentContainer>
        <Outlet />
      </ContentContainer>
    </div>
  );
}

export default MainPage;
