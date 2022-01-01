import React from 'react';
import { UserGroupIcon } from '@heroicons/react/solid';

import LoginForm from './components/LoginForm';
import HeadingTitle from 'components/Headings/HeadingTitle';

function LoginPage() {
  return (
    <div className="flex flex-col h-screen justify-center items-center ">
      <div className="bg-white bg-opacity-95 rounded-xl w-11/12 sm:w-96 flex flex-col shadow-lg py-6 2xl:py-10 px-6">
        <UserGroupIcon className="h-10 text-indigo-500" />
        <HeadingTitle color="text-indigo-600" text="Otel Görev Takip Sistemi" />
        <LoginForm />
      </div>
    </div>
  );
}

export default LoginPage;
