import React from 'react';

import ProfileCard from 'components/Cards/ProfileCard';
import TaskStatsCard from 'components/Cards/TaskStatsCard';
import HeadingSubtitle from 'components/Headings/HeadingSubtitle';
import { useAuth } from 'context/AuthContext';
import { useTask } from 'context/TaskContext';

export default function MainPageInfo() {
  const { user } = useAuth();
  const { activeTasks, historyTasks } = useTask();

  return (
    <>
      <HeadingSubtitle
        text="Profil"
        customClass="text-center lg:text-left text-indigo-900"
      />
      <ProfileCard name={`${user.name}`} department={user.department} />
      <HeadingSubtitle
        text="Görev İstatistikleri"
        customClass="text-center lg:text-left text-indigo-900"
      />
      <div className="flex flex-col sm:flex-row gap-5 w-full justify-center items-center h-full">
        <TaskStatsCard
          title="Aktif Görev"
          amount={activeTasks.count}
          isActive
        />
        <TaskStatsCard
          title="Tamamlanmış Görev"
          amount={historyTasks.count}
          isActive={false}
        />
      </div>
    </>
  );
}
