import React from 'react';

export default function HeaderTitle({ text, color = 'text-black' }) {
  return (
    <h1 className={`text-2xl text-center font-bold py-10 ${color}`}>{text}</h1>
  );
}
