import React from 'react';
import { Outlet } from 'react-router-dom';
import MainPageHeader from './MainPageHeader';

export default function ContentContainer() {
  return (
    <div className="flex flex-col w-full h-full gap-y-5 scrollbar-thin scrollbar-thumb-indigo-400 md:scrollbar-thumb-indigo-400 scrollbar-track-indigo-200 overflow-y-auto">
      <MainPageHeader />
      <div className="flex flex-col px-2 sm:px-0 grow">
        {/* DASHBOARD CONTENT */}
        <Outlet />
        {/* DASHBOARD CONTENT */}
      </div>
    </div>
  );
}
