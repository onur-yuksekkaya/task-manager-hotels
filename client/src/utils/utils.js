export const getOnlyChangedInputs = (data, initialValues) => {
  const modifiedData = Object.keys(data).reduce((prevObj, currentKey) => {
    if (data[currentKey] !== initialValues[currentKey]) {
      return { ...prevObj, [currentKey]: data[currentKey] };
    } else return { ...prevObj };
  }, {});
  if (Object.keys(modifiedData).length) {
    return { id: initialValues.id, ...modifiedData };
  } else return undefined;
};

export const toggleModalState = (modal, toggleSetter) => {
  toggleSetter((prevState) => ({ ...prevState, [modal]: !prevState[modal] }));
};

export const closeModal = (modal, modalSetter) => {
  modalSetter((prevState) => ({ ...prevState, [modal]: false }));
};
export const openModal = (modal, modalSetter) => {
  modalSetter((prevState) => ({ ...prevState, [modal]: true }));
};

export const findUserNames = (userList, taskList) => {
  return taskList.map((task) => ({
    ...task,
    assigned: task.assigned.map((user) =>
      userList[user]
        ? `${userList[user].name} ${userList[user].surname}`
        : 'Çalışan Yok'
    ),
  }));
};
