import { CheckIcon } from '@heroicons/react/solid';
import Button from 'components/Buttons/Button';
import React from 'react';

export default function InfoWindow({
  info = 'Tamamlandi',
  buttonText = 'Tamam Canim',
  icon = <CheckIcon className="w-[50%] text-indigo-600" />,
  closeWindowAction,
}) {
  return (
    <div className="flex flex-col justify-center items-center">
      {icon}
      <p className="font-semibold text-lg text-center py-8 text-indigo-700">
        {info}
      </p>
      <div className="flex gap-x-10">
        <Button
          text={buttonText}
          customStyleClass="bg-green-500 text-white hover:bg-green-600"
          onClick={closeWindowAction}
          icon={<CheckIcon className="w-6" />}
        />
      </div>
    </div>
  );
}
