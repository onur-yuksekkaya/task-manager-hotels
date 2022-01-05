import React, { useEffect, useState } from 'react';

import { Tab } from '@headlessui/react';

import ActiveTable from './components/ActiveTable';
import HistoryTable from './components/HistoryTable';

import { ClipboardCheckIcon, ClipboardListIcon } from '@heroicons/react/solid';
import EmployeeApi from 'api/services/employee';
import TaskApi from 'api/services/task';
import { toggleModalState } from 'utils/utils';
import InfoModal from 'components/Modal/InfoModal';

export default function TasksPage() {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const [selectedTask, setSelectedTask] = useState('');
  const [userList, setUserList] = useState([]);
  const [taskPageModals, setTaskPageModals] = useState({ userFail: false });

  const getUserList = async () => {
    const data = await EmployeeApi.employeePRM();
    if (data) {
      setUserList(data.employeeList);
    } else {
      toggleModalState('userFail', setTaskPageModals);
    }
  };

  const deleteTask = async (id) => {
    await TaskApi.deleteTask({ id });
    setSelectedTask('');
  };

  useEffect(() => {
    getUserList();
  }, []);

  return (
    <>
      <Tab.Group
        onChange={(index) => {
          setSelectedTabIndex(index);
          setSelectedTask('');
        }}
      >
        <Tab.List className="flex gap-x-2 justify-center">
          <Tab
            className="basis-1/2 md:basis-2/12 lg:basis-48 2xl:basis-72 active:translate-y-1 inline-flex w-full px-5 justify-center gap-x-5 items-center text-sm font-semibold border border-transparent shadow-lg rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 h-12 duration-75 bg-white h-fullmy-2 text-indigo-500 hover:bg-indigo-600 hover:text-white"
            style={{
              backgroundColor: !selectedTabIndex ? '#4f46e5' : 'white',
              color: !selectedTabIndex ? 'white' : '#6366f1',
            }}
          >
            <ClipboardListIcon className="w-6" />
            <span>Aktif Görevler</span>
          </Tab>
          <Tab
            className="basis-1/2 md:basis-2/12 lg:basis-48 2xl:basis-72 active:translate-y-1 inline-flex w-full px-5 justify-center gap-x-5 items-center text-sm font-semibold border border-transparent shadow-lg rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 h-12 duration-75 bg-white h-fullmy-2 text-indigo-500 hover:bg-indigo-600 hover:text-white"
            style={{
              backgroundColor: selectedTabIndex ? '#4f46e5' : 'white',
              color: selectedTabIndex ? 'white' : '#6366f1',
            }}
          >
            <ClipboardCheckIcon className="w-6" />
            <span>Tamamlanmış Görevler</span>
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel className="focus:outline-none">
            <ActiveTable
              userList={userList}
              deleteTask={deleteTask}
              selectedTask={selectedTask}
              setSelectedTask={setSelectedTask}
            />
          </Tab.Panel>
          <Tab.Panel className="focus:outline-none">
            <HistoryTable
              userList={userList}
              selectedTask={selectedTask}
              setSelectedTask={setSelectedTask}
              deleteTask={deleteTask}
            />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
      {taskPageModals.userFail && (
        <InfoModal
          modalTitle="Çalışan Listesi Güncellenemedi!"
          modalIcon="error"
          modalToggle={() => {
            toggleModalState('userFail', setTaskPageModals);
          }}
        />
      )}
    </>
  );
}
