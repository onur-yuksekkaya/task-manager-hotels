import React from 'react';

import { UserCircleIcon } from '@heroicons/react/solid';

export default function ProfileCard({
  name = 'Onur Yuksekkaya',

  department = 'Yazilimci',
}) {
  return (
    <div className="bg-white flex rounded-xl p-10 h-40 w-full shadow-lg mx-auto border border-gray-300 items-center gap-x-5">
      <UserCircleIcon className="w-20 text-indigo-700" />
      <div>
        <p className="font-bold text-lg text-indigo-900">{name}</p>
        <p className="font-semibold text-md text-indigo-500">{department}</p>
      </div>
    </div>
  );
}
