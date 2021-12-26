import React from 'react';
import { useAuth } from 'context/AuthContext';

import Div100vh from 'react-div-100vh';
import { Outlet } from 'react-router-dom';
import ContentContainer from './components/ContentContainer';
import Sidebar from './components/Sidebar';

function MainPage() {
  const { user } = useAuth();

  return (
    <Div100vh className="w-screen sm:gap-10 flex flex-col-reverse lg:flex-row sm:px-20 sm:py-2 lg:py-10 justify-evenly">
      <Sidebar />
      <ContentContainer>
        <Outlet />
      </ContentContainer>
    </Div100vh>
  );
}

export default MainPage;
