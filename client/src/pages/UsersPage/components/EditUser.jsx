import { CheckIcon } from '@heroicons/react/solid';
import { updateEmployee } from 'api/services/employee';
import Button from 'components/Buttons/Button';
import Form from 'components/Form/Form';
import TextInput from 'components/Form/TextInput';
import Loading from 'components/Loading/Loading';
import { editUserSchema, registerUserSchema } from 'config/validationSchemas';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export default function EditUser({
  setIsOpen,
  selectedUser,
  userValues,
  loadUserData,
}) {
  const [isLoading, setLoading] = useState(false);
  const UserSwal = withReactContent(Swal);

  const userEditSuccessAlert = () => {
    UserSwal.fire({
      title: <strong>Çalışan Güncellendi!</strong>,
      icon: 'success',
      showConfirmButton: false,
      didOpen: () => {
        setTimeout(() => {
          UserSwal.close();
        }, 1000);
      },
    });
  };
  const userEditNoChange = () => {
    UserSwal.fire({
      title: <strong>Güncellenmedi</strong>,
      html: <i className="text-indigo-600">Güncellenecek bir şey yok.</i>,
      icon: 'warning',
      confirmButtonText: 'Tamam',
      confirmButtonColor: '#4f46e5',
    });
  };
  const userEditErrorAlert = () => {
    UserSwal.fire({
      title: <strong className="text-indigo-800">Hata</strong>,
      html: <i className="text-indigo-600">Çalışan Güncellenemedi.</i>,
      icon: 'error',
      confirmButtonText: 'Tamam',
      confirmButtonColor: '#4f46e5',
    });
  };

  const getOnlyChangedInputs = (data) => {
    const valuesInitial = { ...userValues };
    const modifiedData = Object.keys(data).reduce((prevObj, currentKey) => {
      if (data[currentKey] !== valuesInitial[currentKey]) {
        return { ...prevObj, [currentKey]: data[currentKey] };
      } else return { ...prevObj };
    }, {});
    if (Object.keys(modifiedData).length) {
      return { id: valuesInitial.id, ...modifiedData };
    } else return undefined;
  };

  const handleSubmit = async (data) => {
    const changedData = getOnlyChangedInputs(data);
    console.log(changedData);
    setLoading(true);

    if (changedData) {
      try {
        await updateEmployee(changedData);
        setIsOpen(false);
        loadUserData();
        userEditSuccessAlert();
      } catch {
        userEditErrorAlert();
        setLoading(false);
      }
    } else {
      userEditNoChange();
      setLoading(false);
    }
  };
  console.log(selectedUser);

  return (
    <Form
      onSubmit={handleSubmit}
      className="bg-white w-[75vw] lg:w-[50vw]"
      schema={registerUserSchema}
      defaultValues={userValues}
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
  );
}
