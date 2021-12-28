import React from 'react';
import { GlobeIcon } from '@heroicons/react/solid';
import HeadingSubtitle from 'components/Headings/HeadingSubtitle';

export default function ContentHeader({ routeTitle = 'Current Route Here' }) {
  return (
    <div className="bg-white h-14 sm:rounded-xl shadow-lg flex border border-gray-300 justify-center sm:justify-start items-center px-5 gap-x-5">
      <GlobeIcon className="w-7 text-indigo-700" />
      <HeadingSubtitle text={routeTitle} customClass="text-indigo-700" />
    </div>
  );
}
