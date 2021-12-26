import React from 'react';

export default function HeaderSubtitle({ text, color = 'text-black' }) {
  return (
    <h2
      className={`text-md 2xl:text-xl text-center font-semibold py-5 ${color}`}
    >
      {text}
    </h2>
  );
}
