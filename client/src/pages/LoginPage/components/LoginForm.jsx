import React from 'react';

import { loginSchema } from 'config/validationSchemas';

import Form from 'components/Form/Form';
import TextInput from 'components/Form/TextInput';
import Button from 'components/Buttons/Button';

import { CheckIcon } from '@heroicons/react/solid';

export default function LoginForm({ handleSubmit, isLoading }) {
  return (
    <Form onSubmit={handleSubmit} schema={loginSchema} isDisabled={isLoading}>
      <TextInput
        name="email"
        labelText="Email"
        type="email"
        placeholder="isim@soyisim.com"
      />
      <TextInput
        name="password"
        labelText="Parola"
        type="password"
        placeholder="Şifreniz"
      />
      <Button
        isLoading={isLoading}
        text="Giriş Yap"
        customStyleClass="bg-indigo-600 text-white hover:bg-indigo-800"
        type="submit"
        icon={<CheckIcon className="w-6" />}
      />
    </Form>
  );
}
