import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { ROOT, LOGIN, USERS, TASKS } from './CONSTANTS';

import MainPage from 'pages/MainPage/MainPage';
import LoginPage from 'pages/LoginPage/LoginPage';
import UsersPage from 'pages/UsersPage/UsersPage';
import TasksPage from 'pages/TasksPage/TasksPage';
import MainPageInfo from 'pages/MainPage/components/MainPageInfo';

export const RouterConfig = () => {
  return (
    <Routes>
      <Route path={ROOT} element={<MainPage />}>
        <Route index element={<MainPageInfo />} />
        <Route path={USERS} element={<UsersPage />} />
        <Route path={TASKS} element={<TasksPage />} />
      </Route>
      <Route path={LOGIN} element={<LoginPage />} />
    </Routes>
  );
};
