import React, { useState } from 'react';

import Form from 'components/Form/Form';
import TextInput from 'components/Form/TextInput';
import Button from 'components/Buttons/Button';
import TextArea from 'components/Form/TextArea';
import Select from 'components/Form/Select';

import { CheckIcon } from '@heroicons/react/solid';

import { addTaskSchema } from 'config/validationSchemas';

import TaskApi from 'api/services/task';
import InfoModal from 'components/Modal/InfoModal';
import { toggleModalState } from 'utils/utils';

export default function AddTask({ setIsOpen, loadTask, userList }) {
  const [isLoading, setLoading] = useState(false);
  const [taskAddModals, setTaskAddModals] = useState({
    success: false,
    fail: false,
  });

  const handleSubmit = async (data) => {
    setLoading(true);
    const response = await TaskApi.createTask(data);
    if (response.success) {
      toggleModalState('success', setTaskAddModals);
      setIsOpen();
      loadTask();
    } else {
      setLoading(false);
      toggleModalState('fail', setTaskAddModals);
    }
  };

  return (
    <>
      <Form
        onSubmit={handleSubmit}
        className="bg-white w-[75vw] lg:w-[50vw]"
        schema={addTaskSchema}
        isDisabled={isLoading}
      >
        <TextInput
          name="title"
          labelText="Görev Adı"
          type="text"
          placeholder="Görev Adı"
        />
        <TextArea
          name="description"
          labelText="Görev Açıklaması"
          type="text"
          placeholder="Görev Açıklaması"
        />
        <TextInput
          name="room_number"
          labelText="Oda Numarası"
          type="text"
          placeholder="Oda No:"
        />
        <Select
          labelText="Çalışan"
          name="assigned"
          options={
            userList &&
            userList.map((user) => ({
              text: `${user.name} ${user.surname} ---> ${user.department}`,
              value: user.id,
            }))
          }
          isMultiple={true}
          customStyleClass="h-24 py-4"
        />

        <Button
          isLoading={isLoading}
          text={'Oluştur'}
          customStyleClass="bg-green-600 text-white hover:bg-green-800"
          type="submit"
          icon={<CheckIcon className="w-6" />}
        />
      </Form>

      {taskAddModals.success && (
        <InfoModal
          modalTitle="Görev Eklendi!"
          modalToggle={() => {
            toggleModalState('success', setTaskAddModals);
          }}
        />
      )}

      {taskAddModals.fail && (
        <InfoModal
          modalTitle="Görev Eklenemedi!"
          modalIcon="error"
          modalToggle={() => {
            toggleModalState('fail', setTaskAddModals);
          }}
        />
      )}
    </>
  );
}
