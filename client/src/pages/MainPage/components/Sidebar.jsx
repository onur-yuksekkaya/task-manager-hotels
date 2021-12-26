import React from 'react';

import { CollectionIcon } from '@heroicons/react/solid';
import { UsersIcon } from '@heroicons/react/solid';
import { BriefcaseIcon } from '@heroicons/react/solid';

import HeaderSubtitle from 'components/Headers/HeaderSubtitle';
import SidebarButton from 'components/Button/SidebarButton';
import { LogoutIcon } from '@heroicons/react/outline';

export default function Sidebar() {
  return (
    <div className="bg-gradient-to-b from-indigo-700 via-indigo-700 to-indigo-800 basis-1/12 sm:basis-1/5 rounded-t-2xl sm:rounded-lg shadow-md flex justify-center lg:justify-start lg:flex-col items-center py-5 gap-x-10 gap-y-2">
      <CollectionIcon className="text-white w-12 hidden lg:block" />
      <HeaderSubtitle
        text={'Otel Görev Takip Sistemi '}
        color="hidden lg:block sm:text-white display ::after"
      />
      <SidebarButton
        buttonText="Görevler"
        customStyleClass="bg-white hover:bg-indigo-400 text-indigo-700 hover:text-white lg:mt-auto"
      >
        <BriefcaseIcon className="w-6" />
      </SidebarButton>
      <SidebarButton
        buttonText="Çalışanlar"
        customStyleClass="bg-white hover:bg-indigo-400 text-indigo-700 hover:text-white"
      >
        <UsersIcon className="w-6" />
      </SidebarButton>
      <SidebarButton
        buttonText="Çıkış"
        customStyleClass="bg-white hover:bg-indigo-400 text-indigo-700 hover:text-white lg:mt-auto"
      >
        <LogoutIcon className="w-6" />
      </SidebarButton>
    </div>
  );
}
