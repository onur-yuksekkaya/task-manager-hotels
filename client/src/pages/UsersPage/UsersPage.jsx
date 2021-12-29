import React from 'react';
import { PlusCircleIcon } from '@heroicons/react/solid';
import SettingSection from 'components/SettingsSection/SettingSection';
import HeadingSubtitle from 'components/Headings/HeadingSubtitle';

export default function UsersPage() {
  return (
    <>
      <SettingSection
        title="Seçenekler"
        buttonTexts={['Çalışan Ekle']}
        buttonFunctions={[
          () => {
            alert('Çalışan buradan eklenir be güzelim.');
          },
        ]}
        buttonIcons={[<PlusCircleIcon className="w-6" />]}
      />
      <HeadingSubtitle
        text="Çalışan Listesi"
        customClass="text-center lg:text-left text-indigo-900"
      />
    </>
  );
}
