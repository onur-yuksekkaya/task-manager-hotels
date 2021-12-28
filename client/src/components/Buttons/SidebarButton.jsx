import React from 'react';
import { QuestionMarkCircleIcon } from '@heroicons/react/outline';

export default function SidebarButton({
  text = 'Button',
  customStyleClass = 'bg-yellow-500 text-black',
  type = 'button',
  onClick = () => {},
  icon = <QuestionMarkCircleIcon className="w-6 ml-5" />,
}) {
  return (
    <button
      type={type}
      className={`inline-flex w-16 h-14 lg:h-12 lg:w-10/12 text-xs md:text-sm 2xl:text-sm justify-center items-center lg:justify-start lg:gap-5 flex-col lg:flex-row font-light rounded-xl lg:rounded-md focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 active:translate-y-1 duration-150 ${customStyleClass} `}
      onClick={onClick}
    >
      {icon}
      {text}
    </button>
  );
}
