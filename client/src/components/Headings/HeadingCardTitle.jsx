import React from 'react';

export default function HeadingCardTitle({ text, customClass = '' }) {
  return (
    <h3 className={`text-md 2xl:text-lg font-semibold py-3 ${customClass}`}>
      {text}
    </h3>
  );
}
