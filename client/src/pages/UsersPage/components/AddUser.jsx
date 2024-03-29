import React, { useState } from 'react';

import LoginApi from 'api/services/login';
import { addUserSchema } from 'config/validationSchemas';
import { closeModal, toggleModalState } from 'utils/utils';

import Form from 'components/Form/Form';
import TextInput from 'components/Form/TextInput';
import Button from 'components/Buttons/Button';
import InfoModal from 'components/Modal/InfoModal';

import { CheckIcon } from '@heroicons/react/solid';

export default function AddUser({ setIsOpen, loadUserData }) {
  const [isLoading, setLoading] = useState(false);
  const [userAddModals, setUserAddModals] = useState({
    success: false,
    fail: false,
  });

  const handleSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await LoginApi.register(data);
      if (response) {
        toggleModalState('success', setUserAddModals);
        loadUserData();
        setIsOpen();
      }
    } catch (err) {
      toggleModalState('fail', setUserAddModals);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Form
        onSubmit={handleSubmit}
        className="bg-white w-[75vw] lg:w-[50vw]"
        schema={addUserSchema}
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
      {userAddModals.success && (
        <InfoModal
          modalTitle="Çalışan Eklendi!"
          modalIcon="success"
          modalClose={() => {
            closeModal('success', setUserAddModals);
          }}
        />
      )}
      {userAddModals.fail && (
        <InfoModal
          modalTitle="Çalışan Eklenemedi!"
          modalIcon="error"
          modalClose={() => {
            closeModal('fail', setUserAddModals);
          }}
        />
      )}
    </>
  );
}
