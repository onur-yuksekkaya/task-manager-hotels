import React, { useEffect, useState } from 'react';

import TaskApi from 'api/services/task';
import { editTaskSchema } from 'config/validationSchemas';
import {
  closeModal,
  getOnlyChangedInputs,
  toggleModalState,
} from 'utils/utils';

import Form from 'components/Form/Form';
import TextInput from 'components/Form/TextInput';
import Button from 'components/Buttons/Button';
import TextArea from 'components/Form/TextArea';
import Select from 'components/Form/Select';
import InfoModal from 'components/Modal/InfoModal';

import { CheckIcon } from '@heroicons/react/solid';

export default function EditTask({
  setIsOpen,
  userList,
  selectedTask,
  loadTask,
}) {
  const [isLoading, setLoading] = useState(true);
  const [taskValues, setTaskValues] = useState();
  const [taskEditModals, setTaskEditModals] = useState({
    success: false,
    fail: false,
    noChange: false,
  });

  const getTask = async () => {
    setLoading(true);
    const data = await TaskApi.getTaskById({ id: selectedTask });
    if (data) {
      setTaskValues(data.task);
      setLoading(false);
    }
  };

  const handleSubmit = async (data) => {
    setLoading(true);
    const changedData = getOnlyChangedInputs(
      { ...data, room_number: Number(data.room_number) },
      taskValues
    );
    if (changedData) {
      const response = await TaskApi.updateTask(changedData);
      if (response) {
        loadTask();
        toggleModalState('success', setTaskEditModals);
        setIsOpen();
      } else {
        toggleModalState('fail', setTaskEditModals);
      }
    } else {
      toggleModalState('noChange', setTaskEditModals);
    }
    setLoading(false);
  };

  useEffect(() => {
    getTask();
  }, []);

  return (
    <>
      {/* FOCUSTRAP FOCUS  */}
      <input className="w-0 h-0 bg-transparent" tabIndex={0}></input>
      {/* FOCUSTRAP FOCUS  */}
      <Form
        onSubmit={handleSubmit}
        className="bg-white w-[75vw] lg:w-[50vw]"
        schema={editTaskSchema}
        isDisabled={isLoading}
        valuesToSet={taskValues}
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
            Object.keys(userList).map((user) => ({
              text: `${userList[user].name} ${userList[user].surname} ---> ${userList[user].department}`,
              value: user,
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
      {taskEditModals.success && (
        <InfoModal
          modalTitle="Görev Güncellendi!"
          closeModal={() => {
            closeModal('success', setTaskEditModals);
          }}
        />
      )}
      {taskEditModals.noChange && (
        <InfoModal
          modalTitle="Değişen Bir Şey Yok"
          modalIcon="warning"
          modalClose={() => {
            closeModal('noChange', setTaskEditModals);
          }}
        />
      )}

      {taskEditModals.fail && (
        <InfoModal
          modalTitle="Görev Güncellenemedi!"
          modalIcon="error"
          modalClose={() => {
            closeModal('fail', setTaskEditModals);
          }}
        />
      )}
    </>
  );
}
