import React, { useState } from 'react';

import LoginApi from 'api/services/login';
import { registerUserSchema } from 'config/validationSchemas';

import Form from 'components/Form/Form';
import TextInput from 'components/Form/TextInput';
import Button from 'components/Buttons/Button';
import Loading from 'components/Loading/Loading';

import { CheckIcon } from '@heroicons/react/solid';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';

export default function AddUser({ setIsOpen, loadUserData }) {
  const [isLoading, setLoading] = useState(false);
  const UserSwal = withReactContent(Swal);

  const userAddSuccessAlert = () => {
    UserSwal.fire({
      title: <strong>Çalışan Eklendi!</strong>,
      icon: 'success',
      showConfirmButton: false,
      didOpen: () => {
        setTimeout(() => {
          UserSwal.close();
        }, 1000);
      },
    });
  };
  const userAddErrorAlert = () => {
    UserSwal.fire({
      title: <strong className="text-indigo-800">Hata</strong>,
      html: <i className="text-indigo-600">Çalışan Eklenemedi.</i>,
      icon: 'error',
      confirmButtonText: 'Tamam',
      confirmButtonColor: '#4f46e5',
    });
  };

  const handleSubmit = async (data) => {
    setLoading(true);
    try {
      const registerResponse = await LoginApi.register(data);
      if (registerResponse) {
        console.log(registerResponse);
      }
      userAddSuccessAlert();
      loadUserData();
      setIsOpen(false);
    } catch (err) {
      userAddErrorAlert();
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form
      onSubmit={handleSubmit}
      className="bg-white w-[75vw] lg:w-[50vw]"
      schema={registerUserSchema}
      isDisabled={isLoading}
    >
      <TextInput
        name="name"
        labelText="Çalışan Adı"
        type="text"
        placeholder="İsim"
      />
      <TextInput
        name="surname"
        labelText="Çalışan Soyadı"
        type="text"
        placeholder="Soyisim"
      />
      <TextInput
        name="department"
        labelText="Çalışan Departmanı"
        type="text"
        placeholder="Kat görevlisi"
      />
      <TextInput
        name="email"
        labelText="Çalışan E-mail"
        type="email"
        placeholder="calisan@sirket.com"
      />
      <TextInput
        name="phone"
        labelText="Çalışan Telefonu"
        type="text"
        placeholder="90"
      />
      <TextInput
        name="password"
        labelText="Çalışan şifre"
        type="text"
        placeholder="Sifre"
      />
      <Button
        isLoading={isLoading}
        text={'Oluştur'}
        customStyleClass="bg-green-600 text-white hover:bg-green-800"
        type="submit"
        icon={<CheckIcon className="w-6" />}
      />
    </Form>
  );
}
