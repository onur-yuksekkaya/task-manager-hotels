import React from 'react';

export default function HeadingSubtitle({ text, customClass = 'text-black' }) {
  return (
    <h2 className={`text-md 2xl:text-xl font-semibold py-4 ${customClass}`}>
      {text}
    </h2>
  );
}
