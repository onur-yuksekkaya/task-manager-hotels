import React from 'react';

export default function Button({
  buttonText = 'button',
  bgColor = 'bg-white',
  textColor = 'black',
  type = 'button',
}) {
  return (
    <button
      type={type}
      className={`inline-flex w-full justify-center items-center my-10 text-sm font-bold border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 h-12 active:translate-y-1 duration-75 ${bgColor} ${textColor}`}
    >
      {buttonText}
    </button>
  );
}
