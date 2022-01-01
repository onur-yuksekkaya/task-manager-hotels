import React from 'react';

import Form from 'components/Form/Form';
import TextInput from 'components/Form/TextInput';
import Button from 'components/Buttons/Button';

import { CheckIcon } from '@heroicons/react/solid';

import { addUserSchema } from 'config/validationSchemas';

export default function AddUser({ setIsOpen }) {
  const handleSubmit = () => {
    setIsOpen(false);
  };

  return (
    <Form
      onSubmit={handleSubmit}
      className="bg-white w-[75vw] lg:w-[50vw]"
      schema={addUserSchema}
    >
      <TextInput
        name="workerName"
        labelText="Çalışan Adı"
        type="text"
        placeholder="İsim Soyisim"
      />
      <TextInput
        name="workerEmail"
        labelText="Çalışan E-mail"
        type="email"
        placeholder="calisan@sirket.com"
      />
      <TextInput
        name="workerTitle"
        labelText="Çalışan Ünvanı"
        type="text"
        placeholder="Kat görevlisi"
      />

      <Button
        text="Oluştur"
        customStyleClass="bg-green-600 text-white hover:bg-green-800"
        type="submit"
        icon={<CheckIcon className="w-6" />}
      />
    </Form>
  );
}
