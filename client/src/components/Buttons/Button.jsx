import React from 'react';
import { QuestionMarkCircleIcon } from '@heroicons/react/solid';
import Loading from 'components/Loading/Loading';

export default function Button({
  isLoading = false,
  text = 'button',
  customStyleClass = '',
  type = 'button',
  icon = <QuestionMarkCircleIcon className="w-6" />,
  onClick = () => {},
  ...rest
}) {
  return (
    <button
      type={type}
      className={`inline-flex w-full px-5 justify-center gap-x-5 items-center text-sm font-semibold border border-transparent shadow-lg rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 h-12 active:translate-y-1 duration-75 bg-white text-black ${customStyleClass} disabled:bg-orange-500`}
      onClick={onClick}
      disabled={isLoading}
      {...rest}
    >
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {icon}
          {text}
        </>
      )}
    </button>
  );
}
