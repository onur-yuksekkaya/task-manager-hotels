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
import { useAuth } from 'context/AuthContext';

export default function Sidebar() {
  const navigate = useNavigate();
  const { user, setUser } = useAuth();

  return (
    <div className="sticky bottom-0  min-w-[16rem] max-w-full left-0 lg:static bg-white border border-gray-300 h-14 lg:h-full sm:basis-1/5 2xl:basis-1/6 sm:rounded-2xl lg:rounded-none shadow-lg flex justify-center lg:justify-start lg:flex-col items-center py-5 gap-x-10 gap-y-2">
      <div className="hidden lg:flex px-2 gap-x-2">
        <CollectionIcon className="lg:text-indigo-700 w-12 hidden lg:block" />
        <HeadingSubtitle
          text="Otel Görev Takibi"
          customClass="hidden lg:block lg:text-indigo-700 text-center "
        />
      </div>
      <SidebarButton
        text="Anasayfa"
        customStyleClass="lg:mt-auto"
        onClick={() => {
          navigate('/');
        }}
        icon={<HomeIcon className="w-6 lg:ml-5" />}
      />
      <SidebarButton
        text="Görevler"
        onClick={() => {
          navigate('tasks');
        }}
        icon={<BriefcaseIcon className="w-6 lg:ml-5" />}
      />
      {user.isAdmin && (
        <SidebarButton
          text="Çalışanlar"
          customStyleClass="lg:mb-auto"
          onClick={() => {
            navigate('users');
          }}
          icon={<UsersIcon className="w-6 lg:ml-5" />}
        />
      )}

      <SidebarButton
        text="Çıkış"
        customStyleClass="lg:mt-auto"
        onClick={() => {
          setUser('');
        }}
        icon={<LogoutIcon className="w-6 lg:ml-5" />}
      />
    </div>
  );
}
