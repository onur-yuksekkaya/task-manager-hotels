import { QuestionMarkCircleIcon } from '@heroicons/react/solid';
import React from 'react';

export default function TableButton({
  icon = <QuestionMarkCircleIcon className="w-9/12 h-9/12" />,
  onClick = () => {},
  text,
  ...rest
}) {
  return (
    <button
      onClick={onClick}
      className="bg-white w-10 h-10 rounded-md shadow-lg text-indigo-700 flex justify-center items-center hover:text-white hover:bg-indigo-700 active:translate-y-1"
    >
      {icon}
      {text}
    </button>
  );
}
