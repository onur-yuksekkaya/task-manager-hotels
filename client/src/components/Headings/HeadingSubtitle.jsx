import React from 'react';

export default function HeadingSubtitle({ text, customClass = 'text-black' }) {
  return (
    <h2 className={`text-md 2xl:text-lg font-semibold py-4 ${customClass}`}>
      {text}
    </h2>
  );
}
