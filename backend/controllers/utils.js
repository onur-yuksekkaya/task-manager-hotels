export const sanitizeEmployee = (selectedEmployee) => ({
  id: selectedEmployee.id,
  name: selectedEmployee.name,
  surname: selectedEmployee.surname,
  department: selectedEmployee.department,
  email: selectedEmployee.email,
  phone: selectedEmployee.phone,
});

export const getPatchableProps = (reqObject) => {
  const result = {};

  for (let prop in reqObject) {
    if (reqObject[prop]) result[prop] = reqObject[prop];
  }

  return result;
};

export const serializeArrayToQuery = (arr) => {
  let result = "";

  result += "{";
  for (let i = 0; i < arr.length; i++) {
    result += `"${arr[i]}"`;
    if (i !== arr.length - 1) result += ",";
  }
  result += "}";

  return result;
};
