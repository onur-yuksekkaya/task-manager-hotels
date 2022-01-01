import { CheckIcon } from '@heroicons/react/solid';
import Button from 'components/Buttons/Button';
import Form from 'components/Form/Form';
import TextInput from 'components/Form/TextInput';
import { editUserSchema } from 'config/validationSchemas';
import React from 'react';

export default function EditUser({ setIsOpen }) {
  const handleSubmit = () => {
    setIsOpen(false);
  };

  return (
    <Form
      onSubmit={handleSubmit}
      className="bg-white w-[75vw] lg:w-[50vw]"
      schema={editUserSchema}
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
        customStyleClass="bg-indigo-600 text-white hover:bg-indigo-800"
        type="submit"
        icon={<CheckIcon className="w-6" />}
      />
    </Form>
  );
}
