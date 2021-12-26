import React from 'react';

export default function SidebarButton({
  buttonText = 'button',
  customStyleClass = 'bg-white text-black',
  type = 'button',
  children,
}) {
  return (
    <button
      type={type}
      className={`inline-flex w-20 h-16 lg:h-12 lg:w-10/12 text-xs md:text-sm justify-center items-center lg:gap-5 flex-col lg:flex-row font-bold border border-transparent rounded-md focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 active:translate-y-1 duration-75 shadow-2xl ${customStyleClass} `}
    >
      {children}
      {buttonText}
    </button>
  );
}
