import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { ROOT } from './CONSTANTS';

import Home from 'pages/HomePage/HomePage';

export const RouterConfig = () => {
  return (
    <div>
      <Routes>
        <Route path={ROOT} element={<Home />} />
      </Routes>
    </div>
  );
};
