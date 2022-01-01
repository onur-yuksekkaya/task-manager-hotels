import React from 'react';
import { useNavigate } from 'react-router-dom';

import { loginSchema } from 'config/validationSchemas';

import Form from 'components/Form/Form';
import TextInput from 'components/Form/TextInput';
import Button from 'components/Buttons/Button';

import { CheckIcon } from '@heroicons/react/solid';

export default function LoginForm() {
  const navigate = useNavigate();

  const handleSubmit = (data) => {
    console.log(data);
    setTimeout(() => {
      navigate('/');
    }, 2000);
  };

  return (
    <Form onSubmit={handleSubmit} schema={loginSchema}>
      <TextInput
        name="loginEmail"
        labelText="Email"
        type="email"
        placeholder="isim@soyisim.com"
      />
      <TextInput
        name="loginPassword"
        labelText="Parola"
        type="password"
        placeholder="Şifreniz"
      />
      <Button
        text="Giriş Yap"
        customStyleClass="bg-indigo-600 text-white hover:bg-indigo-800"
        type="submit"
        icon={<CheckIcon className="w-6" />}
      />
    </Form>
  );
}
