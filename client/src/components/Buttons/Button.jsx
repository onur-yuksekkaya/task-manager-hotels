import React from 'react';
import { QuestionMarkCircleIcon } from '@heroicons/react/solid';

export default function Button({
  text = 'button',
  customStyleClass = '',
  type = 'button',
  icon = <QuestionMarkCircleIcon className="w-6" />,
  onClick = () => {},
}) {
  return (
    <button
      type={type}
      className={`inline-flex w-full px-5 justify-center gap-x-5 items-center text-sm font-semibold border border-transparent shadow-lg rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 h-12 active:translate-y-1 duration-75 bg-white text-black ${customStyleClass}`}
      onClick={onClick}
    >
      {icon}
      {text}
    </button>
  );
}
