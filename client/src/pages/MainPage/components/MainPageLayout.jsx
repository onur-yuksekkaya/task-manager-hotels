import { routesEnum } from 'navigation/CONSTANTS';
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import MainPageHeader from './MainPageHeader';

export default function MainPageLayout() {
  const { pathname } = useLocation();

  return (
    <div className="flex flex-col w-full h-full gap-y-5 scrollbar-thin scrollbar-thumb-indigo-400 md:scrollbar-thumb-indigo-400 scrollbar-track-indigo-200 overflow-y-auto">
      <MainPageHeader title={routesEnum[pathname]} />
      <div className="flex flex-col px-2 sm:px-0 grow">
        {/* DASHBOARD CONTENT */}
        <Outlet />
        {/* DASHBOARD CONTENT */}
      </div>
    </div>
  );
}
