import React from 'react';

import Form from 'components/Form/Form';
import TextInput from 'components/Form/TextInput';
import Button from 'components/Buttons/Button';
import TextArea from 'components/Form/TextArea';
import Select from 'components/Form/Select';

import { CheckIcon } from '@heroicons/react/solid';

import { editTaskSchema } from 'config/validationSchemas';

const workersMock = [
  { id: 1, name: 'Onur', title: 'Personal Jesus' },
  { id: 2, name: 'Hilmi', title: 'Somebody I Used to Know' },
  { id: 3, name: 'Yusuf', title: 'Dog Days Are Over' },
];

export default function EditTask({ taskValues = {}, setIsOpen }) {
  const handleSubmit = () => {
    console.log('YEAH');
    setIsOpen(false);
  };

  return (
    <Form
      onSubmit={handleSubmit}
      className="bg-white w-[75vw] lg:w-[50vw]"
      defaultValues={taskValues}
      schema={editTaskSchema}
    >
      <TextInput
        name="taskName"
        labelText="Görev Adı"
        type="text"
        placeholder="Görev Adı"
      />
      <TextArea
        name="taskDesc"
        labelText="Görev Açıklaması"
        type="text"
        placeholder="Görev Açıklaması"
      />
      <Select
        labelText="Çalışan"
        name="taskWorker"
        options={workersMock.map(
          (worker) => `${worker.name} -> ${worker.title}`
        )}
      />
      <Button
        text={'Güncelle'}
        customStyleClass="bg-green-600 text-white hover:bg-green-800"
        type="submit"
        icon={<CheckIcon className="w-6" />}
      />
    </Form>
  );
}
