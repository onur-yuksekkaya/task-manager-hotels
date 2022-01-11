import React, { useState } from 'react';

import { useAuth } from 'context/AuthContext';

import HeadingTitle from 'components/Headings/HeadingTitle';
import LoginForm from './components/LoginForm';
import LoginApi from 'api/services/login';

import { UserGroupIcon } from '@heroicons/react/solid';
import { closeModal, toggleModalState } from 'utils/utils';
import InfoModal from 'components/Modal/InfoModal';

function LoginPage() {
  const { setUser } = useAuth();

  const [isLoading, setLoading] = useState(false);
  const [loginModals, setLoginModals] = useState({
    success: false,
    fail: false,
  });

  const handleSubmit = async (data) => {
    setLoading(true);
    try {
      const loginResponse = await LoginApi.login(data);

      if (loginResponse) {
        toggleModalState('success', setLoginModals);
        setTimeout(() => {
          setUser(loginResponse);
        }, 1200);
      } else {
        toggleModalState('fail', setLoginModals);
      }
    } catch (err) {
      toggleModalState('fail', setLoginModals);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex flex-col h-screen justify-center items-center ">
        <div className="bg-white bg-opacity-95 rounded-xl w-11/12 sm:w-96 flex flex-col shadow-lg py-6 2xl:py-10 px-6">
          <UserGroupIcon className="h-10 text-indigo-500" />
          <HeadingTitle color="text-indigo-600" text="Otel Görev Takibi" />
          <LoginForm handleSubmit={handleSubmit} isLoading={isLoading} />
        </div>
      </div>
      {loginModals.success && (
        <InfoModal
          modalTitle="Giriş Başarılı!"
          modalClose={() => {
            closeModal('success', setLoginModals);
          }}
        />
      )}
      {loginModals.fail && (
        <InfoModal
          modalTitle="Giriş Başarısız"
          modalIcon="error"
          modalClose={() => {
            closeModal('fail', setLoginModals);
          }}
        />
      )}
    </>
  );
}

export default LoginPage;
