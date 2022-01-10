import React from 'react';
import { QuestionMarkCircleIcon } from '@heroicons/react/outline';

export default function SidebarButton({
  text = 'Button',
  customStyleClass = '',
  type = 'button',
  onClick = () => {},
  icon = <QuestionMarkCircleIcon className="w-6 ml-5" />,
}) {
  return (
    <button
      type={type}
      className={`inline-flex w-16 h-14 lg:h-12 lg:w-11/12 text-xs md:text-sm 2xl:text-sm justify-center items-center lg:justify-start lg:gap-5 flex-col lg:flex-row font-light rounded-xl lg:rounded-md focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 active:translate-y-1 duration-150 lg:font-semibold lg:bg-indigo-200 hover:bg-indigo-700 hover:text-white text-indigo-700 ${customStyleClass} `}
      onClick={onClick}
    >
      {icon}
      {text}
    </button>
  );
}
