import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { routesEnum } from 'navigation/CONSTANTS';
import { TaskProvider } from 'context/TaskContext';

import MainPageHeader from './components/MainPageHeader';
import Sidebar from './components/Sidebar';

function MainPage() {
  const { pathname } = useLocation();

  return (
    <div className="w-screen h-screen sm:gap-10 flex flex-col-reverse lg:flex-row sm:px-2 lg:px-0 sm:py-2 lg:py-0">
      <Sidebar />
      <div className="flex flex-col w-full h-full gap-y-5 scrollbar-thin scrollbar-thumb-indigo-400 md:scrollbar-thumb-indigo-400 scrollbar-track-indigo-200 overflow-y-auto lg:py-5">
        <MainPageHeader title={routesEnum[pathname]} />
        <TaskProvider>
          <div className="flex flex-col px-2 sm:px-0 grow">
            {/* DASHBOARD CONTENT */}
            <Outlet />
            {/* DASHBOARD CONTENT */}
          </div>
        </TaskProvider>
      </div>
    </div>
  );
}

export default MainPage;
