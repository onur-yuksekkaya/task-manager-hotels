import React from 'react';
import { Outlet } from 'react-router-dom';
import ContentHeader from './ContentHeader';

export default function ContentContainer() {
  return (
    <div className="grow inline-flex flex-col gap-y-1">
      <ContentHeader />
      <div className="grow px-2 sm:px-0">
        <Outlet />
      </div>
    </div>
  );
}
