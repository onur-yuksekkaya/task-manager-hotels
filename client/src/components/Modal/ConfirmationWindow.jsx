import { BanIcon, CheckIcon } from '@heroicons/react/solid';
import Button from 'components/Buttons/Button';
import React from 'react';

export default function ConfirmationWindow({
  question = 'eminsin?',
  windowActions,
}) {
  const confirmAction = () => {
    windowActions.confirm();
  };
  const cancelAction = () => {
    windowActions.cancel();
  };

  return (
    <div className="">
      <p className="font-semibold text-lg text-center py-8">{question}</p>
      <div className="flex gap-x-10">
        <Button
          text="Eved"
          customStyleClass="bg-green-600 text-white hover:bg-green-800"
          onClick={confirmAction}
          icon={<CheckIcon className="w-6" />}
        />
        <Button
          text={'Hayir'}
          customStyleClass="bg-red-500 text-white hover:bg-red-600"
          onClick={cancelAction}
          icon={<BanIcon className="w-6" />}
        />
      </div>
    </div>
  );
}
