import React, { useState } from 'react';

import { updateEmployee } from 'api/services/employee';
import { registerUserSchema } from 'config/validationSchemas';
import {
  closeModal,
  getOnlyChangedInputs,
  toggleModalState,
} from 'utils/utils';

import Button from 'components/Buttons/Button';
import Form from 'components/Form/Form';
import TextInput from 'components/Form/TextInput';
import InfoModal from 'components/Modal/InfoModal';

import { CheckIcon } from '@heroicons/react/solid';

export default function EditUser({ setIsOpen, userValues, loadUserData }) {
  const [isLoading, setLoading] = useState(false);
  const [userEditModals, setUserEditModals] = useState({
    success: false,
    fail: false,
    noChange: false,
  });

  const handleSubmit = async (data) => {
    const changedData = getOnlyChangedInputs(data, userValues);
    setLoading(true);

    if (changedData) {
      try {
        await updateEmployee(changedData);
        toggleModalState('success', setUserEditModals);
        setIsOpen();
        loadUserData();
      } catch {
        toggleModalState('fail', setUserEditModals);
        setLoading(false);
      }
    } else {
      toggleModalState('noChange', setUserEditModals);
      setLoading(false);
    }
  };

  return (
    <>
      {/* FOCUSTRAP FOCUS  */}
      <input className="w-0 h-0 bg-transparent" tabIndex={0}></input>
      {/* FOCUSTRAP FOCUS  */}
      <Form
        onSubmit={handleSubmit}
        className="bg-white w-[75vw] lg:w-[50vw]"
        schema={registerUserSchema}
        valuesToSet={userValues}
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
        <Button
          isLoading={isLoading}
          text={'Oluştur'}
          customStyleClass="bg-green-600 text-white hover:bg-green-800"
          type="submit"
          icon={<CheckIcon className="w-6" />}
        />
      </Form>
      {userEditModals.success && (
        <InfoModal
          modalTitle="Çalışan Güncellendi!"
          modalIcon="success"
          modalClose={() => {
            closeModal('success', setUserEditModals);
          }}
        />
      )}
      {userEditModals.noChange && (
        <InfoModal
          modalTitle="Değişen Bir Şey Yok"
          modalIcon="warning"
          modalClose={() => {
            closeModal('noChange', setUserEditModals);
          }}
        />
      )}

      {userEditModals.fail && (
        <userEditModalsInfoModal
          modalTitle="Çalışan Güncellenemedi!"
          modalIcon="error"
          modalClose={() => {
            toggleModalState('fail', setUserEditModals);
          }}
        />
      )}
    </>
  );
}
