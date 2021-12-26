import React from 'react';
import Button from 'components/Button/Button';
import TextInput from 'components/TextInput/TextInput';
import Form from 'components/Form/Form';
import { loginSchema } from 'config/validationSchemas';

export default function LoginForm() {
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Form onSubmit={onSubmit} schema={loginSchema}>
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
        buttonText="Giriş Yap"
        bgColor="bg-indigo-500"
        textColor="text-white"
        type="submit"
      />
    </Form>
  );
}
