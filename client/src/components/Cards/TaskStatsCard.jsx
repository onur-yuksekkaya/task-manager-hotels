import HeadingCardTitle from 'components/Headings/HeadingCardTitle';
import React from 'react';

export default function TaskStatsCard({
  title = 'Aktif Görev',
  amount = '29',
  isActive = true,
}) {
  return (
    <div
      className={`w-full lg:w-56 h-40 lg:h-56 bg-white rounded-lg shadow-lg border border-gray-300 text-center flex flex-col  ${
        isActive ? 'text-green-600' : 'text-blue-700'
      }
      py-2
      `}
    >
      <HeadingCardTitle text={title} />
      <span className="inline-block text-6xl font-bold my-auto">{amount}</span>
    </div>
  );
}
