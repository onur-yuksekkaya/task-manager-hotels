import React from 'react';

import ProfileCard from 'components/Cards/ProfileCard';
import TaskStatsCard from 'components/Cards/TaskStatsCard';
import HeadingSubtitle from 'components/Headings/HeadingSubtitle';

export default function MainPageInfo() {
  return (
    <>
      <HeadingSubtitle
        text="Profil"
        customClass="text-center lg:text-left text-indigo-900"
      />
      <ProfileCard />
      <HeadingSubtitle
        text="Görev İstatistikleri"
        customClass="text-center lg:text-left text-indigo-900"
      />
      <div className="flex flex-col sm:flex-row gap-5 w-full justify-center">
        <TaskStatsCard title="Aktif Görev" amount="30" isActive />
        <TaskStatsCard title="Tamamlanmış Görev" amount="9" isActive={false} />
      </div>
    </>
  );
}
