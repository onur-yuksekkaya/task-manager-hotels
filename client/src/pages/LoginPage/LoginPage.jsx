import React, { useState } from 'react';

import { useAuth } from 'context/AuthContext';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import HeadingTitle from 'components/Headings/HeadingTitle';
import LoginForm from './components/LoginForm';
import LoginApi from 'api/services/login';

import { UserGroupIcon } from '@heroicons/react/solid';

function LoginPage() {
  const { setUser } = useAuth();
  const LoginSwal = withReactContent(Swal);
  const [isLoading, setLoading] = useState(false);

  const loginErrorAlert = () => {
    LoginSwal.fire({
      title: <strong className="text-indigo-800">Hata</strong>,
      html: (
        <i className="text-indigo-600">
          Giriş sırasında bir sorun oluştu. Bilgilerinizi kontrol edin
        </i>
      ),
      icon: 'error',
      confirmButtonText: 'Tamam',
      confirmButtonColor: '#4f46e5',
    });
  };

  const loginSuccessAlert = () => {
    LoginSwal.fire({
      title: <strong>Giriş başarılı!</strong>,
      html: <i>Yönlendiriliyorsunuz...</i>,
      icon: 'success',
      showConfirmButton: false,
      didOpen: () => {
        setTimeout(() => {
          LoginSwal.close();
        }, 1000);
      },
    });
  };

  const handleSubmit = async (data) => {
    setLoading(true);
    try {
      const loginResponse = await LoginApi.login(data);

      if (loginResponse) {
        loginSuccessAlert();
        setTimeout(() => {
          setUser(loginResponse);
        }, 1200);
      } else {
        loginErrorAlert();
      }
    } catch (err) {
      loginErrorAlert();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen justify-center items-center ">
      <div className="bg-white bg-opacity-95 rounded-xl w-11/12 sm:w-96 flex flex-col shadow-lg py-6 2xl:py-10 px-6">
        <UserGroupIcon className="h-10 text-indigo-500" />
        <HeadingTitle color="text-indigo-600" text="Otel Görev Takip Sistemi" />
        <LoginForm handleSubmit={handleSubmit} isLoading={isLoading} />
      </div>
    </div>
  );
}

export default LoginPage;
