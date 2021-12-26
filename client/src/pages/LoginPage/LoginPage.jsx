import React from 'react';
import { UserGroupIcon } from '@heroicons/react/solid';

import LoginForm from './components/LoginForm';

function LoginPage() {
  return (
    <div className="flex flex-col h-screen justify-center items-center bg-gradient-to-r from-slate-200 to-sky-100">
      <div className="bg-white bg-opacity-95 rounded-xl w-11/12 sm:w-96 flex flex-col shadow-lg py-6 2xl:py-10 px-6">
        <UserGroupIcon className="h-10 text-indigo-500" />
        <h1 className="text-2xl text-center text-gray-900 font-bold py-10">
          Otel Görev Takibi
        </h1>
        <LoginForm />
      </div>
    </div>
  );
}

export default LoginPage;
