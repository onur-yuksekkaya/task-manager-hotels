import React from 'react';
import { useNavigate } from 'react-router-dom';

import {
  CollectionIcon,
  UsersIcon,
  BriefcaseIcon,
  HomeIcon,
} from '@heroicons/react/solid';
import { LogoutIcon } from '@heroicons/react/outline';

import HeadingSubtitle from 'components/Headings/HeadingSubtitle';
import SidebarButton from 'components/Buttons/SidebarButton';

export default function Sidebar() {
  const navigate = useNavigate();

  return (
    <div className="sticky bottom-0  min-w-[16rem] max-w-full left-0 lg:static bg-white border border-gray-300 h-14 lg:h-full sm:basis-1/5 2xl:basis-1/6 sm:rounded-2xl shadow-lg flex justify-center lg:justify-start lg:flex-col items-center py-5 gap-x-10 gap-y-2">
      <CollectionIcon className="lg:text-indigo-700 w-12 hidden lg:block" />
      <HeadingSubtitle
        text={'Otel Görev Takip Sistemi '}
        customClass="hidden lg:block lg:text-indigo-700 text-center"
      />
      <SidebarButton
        text="Anasayfa"
        customStyleClass="lg:bg-indigo-700 hover:bg-indigo-300 lg:hover:bg-indigo-900 text-indigo-700 lg:text-white lg:mt-auto"
        onClick={() => {
          navigate('/');
        }}
        icon={<HomeIcon className="w-6 lg:ml-5" />}
      />
      <SidebarButton
        text="Görevler"
        customStyleClass="lg:bg-indigo-700 hover:bg-indigo-300 lg:hover:bg-indigo-900 text-indigo-700 lg:text-white"
        onClick={() => {
          navigate('tasks');
        }}
        icon={<BriefcaseIcon className="w-6 lg:ml-5" />}
      />
      <SidebarButton
        text="Çalışanlar"
        customStyleClass="lg:bg-indigo-700 hover:bg-indigo-300 lg:hover:bg-indigo-900 text-indigo-700 lg:text-white lg:mb-auto"
        onClick={() => {
          navigate('users');
        }}
        icon={<UsersIcon className="w-6 lg:ml-5" />}
      />

      <SidebarButton
        text="Çıkış"
        customStyleClass="lg:bg-indigo-700 hover:bg-indigo-300 lg:hover:bg-indigo-900 text-indigo-700 lg:text-white lg:mt-auto"
        onClick={() => {
          navigate('login');
        }}
        icon={<LogoutIcon className="w-6 lg:ml-5" />}
      />
    </div>
  );
}
