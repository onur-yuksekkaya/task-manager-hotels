import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { ROOT, LOGIN, USERS, TASKS } from './CONSTANTS';

import MainPage from 'pages/MainPage/MainPage';
import LoginPage from 'pages/LoginPage/LoginPage';
import UsersPage from 'pages/UsersPage/UsersPage';
import TasksPage from 'pages/TasksPage/TasksPage';
import MainPageInfo from 'pages/MainPage/components/MainPageInfo';
import ProtectedRoute from './ProtectedRoute';
import NonUserRoute from './NonUserRoute';

export const RouterConfig = () => {
  return (
    <Routes>
      <Route element={<ProtectedRoute />}>
        <Route path={ROOT} element={<MainPage />}>
          <Route index element={<MainPageInfo />} />
          <Route path={USERS} element={<UsersPage />} />
          <Route path={TASKS} element={<TasksPage />} />
        </Route>
      </Route>

      <Route element={<NonUserRoute />}>
        <Route path={LOGIN} element={<LoginPage />} />
      </Route>
    </Routes>
  );
};
