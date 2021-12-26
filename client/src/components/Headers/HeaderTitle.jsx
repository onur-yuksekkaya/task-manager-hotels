import React from 'react';

export default function HeaderTitle({ text }) {
  return (
    <h1 className="text-2xl text-center text-gray-900 font-bold py-10">
      {text}
    </h1>
  );
}
