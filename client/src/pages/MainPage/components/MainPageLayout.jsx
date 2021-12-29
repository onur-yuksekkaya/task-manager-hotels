import React from 'react';
import { Outlet } from 'react-router-dom';
import MainPageHeader from './MainPageHeader';

export default function ContentContainer() {
  return (
    <div className="flex flex-col w-full h-full overflow-y-scroll gap-y-5">
      <MainPageHeader />
      <div className="flex flex-col px-2 sm:px-0 grow">
        {/* DASHBOARD CONTENT */}
        <Outlet />
        {/* DASHBOARD CONTENT */}
      </div>
    </div>
  );
}
