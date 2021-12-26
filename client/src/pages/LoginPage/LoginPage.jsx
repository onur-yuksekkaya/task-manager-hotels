import React from 'react';
import { UserGroupIcon } from '@heroicons/react/solid';

import LoginForm from './components/LoginForm';
import HeaderTitle from 'components/Headers/HeaderTitle';

function LoginPage() {
  return (
    <div className="flex flex-col h-screen justify-center items-center ">
      <div className="bg-white bg-opacity-95 rounded-xl w-11/12 sm:w-96 flex flex-col shadow-lg py-6 2xl:py-10 px-6">
        <UserGroupIcon className="h-10 text-indigo-500" />
        <HeaderTitle text="Otel Görev Takibi" />
        <LoginForm />
      </div>
    </div>
  );
}

export default LoginPage;
