import React from 'react';

import { CollectionIcon } from '@heroicons/react/solid';
import { UsersIcon } from '@heroicons/react/solid';
import { BriefcaseIcon } from '@heroicons/react/solid';

import HeaderSubtitle from 'components/Headers/HeaderSubtitle';
import SidebarButton from 'components/Button/SidebarButton';
import { LogoutIcon } from '@heroicons/react/outline';

export default function Sidebar() {
  return (
    <div className="bg-white basis-1/12 sm:basis-1/5 rounded-t-2xl sm:rounded-lg shadow-lg flex justify-center lg:justify-start lg:flex-col items-center py-5 gap-x-10 gap-y-2">
      <CollectionIcon className="text-indigo-500 w-12 hidden lg:block" />
      <HeaderSubtitle
        text={'Otel Görev Takip Sistemi '}
        color="hidden lg:block sm:text-indigo-500"
      />
      <SidebarButton
        buttonText="Görevler"
        customStyleClass="bg-indigo-500 hover:bg-indigo-700 text-white lg:mt-auto"
      >
        <BriefcaseIcon className="w-6" />
      </SidebarButton>
      <SidebarButton
        buttonText="Çalışanlar"
        customStyleClass="bg-indigo-500 hover:bg-indigo-700 text-white lg:mb-auto"
      >
        <UsersIcon className="w-6" />
      </SidebarButton>
      <SidebarButton
        buttonText="Çıkış"
        customStyleClass="bg-indigo-500 hover:bg-indigo-700 text-white lg:mt-auto"
      >
        <LogoutIcon className="w-6" />
      </SidebarButton>
    </div>
  );
}
