import React from 'react';
import { useAuth } from 'context/AuthContext';

import Sidebar from './components/Sidebar';
import MainPageLayout from './components/MainPageLayout';

function MainPage() {
  const { user } = useAuth();

  return (
    <div className="w-screen h-screen sm:gap-10 flex flex-col-reverse lg:flex-row sm:px-20 sm:py-2 lg:py-10">
      <Sidebar />
      <MainPageLayout />
    </div>
  );
}

export default MainPage;
