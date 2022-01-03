import Api from "../api";

export const getAllEmployees = async ({ page, rowCount }) => {
  try {
    const { data } = await Api.get("employee", { page, rowCount });

    if (data.result === "OK") {
      return {
        employeeList: data.employeeList,
        hasNextPage: data.hasNextPage,
      };
    }
  } catch (error) {
    throw new Error(error);
  }
};

export const getEmployeeData = async ({ id }) => {
  try {
    const { data } = await Api.get(`employee/${id}`);

    if (data.result === "OK") {
      return {
        employee: data.employee,
      };
    }
  } catch (error) {
    throw new Error(error);
  }
};

export const updateEmployee = async ({
  department,
  name,
  surname,
  email,
  phone,
  id,
}) => {
  try {
    const { data } = await Api.patch(`employee/${id}`, {
      department,
      name,
      surname,
      email,
      phone,
    });

    if (data.result === "OK") {
      return {
        success: true,
      };
    }
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteEmployee = async ({ id }) => {
  try {
    const { data } = await Api.delete(`employee/${id}`);

    if (data.result === "OK") {
      return {
        message: data.message,
      };
    }
  } catch (error) {
    throw new Error(error);
  }
};

const EmployeeApi = {
  getAllEmployees,
  createEmployee,
  getEmployeeData,
  updateEmployee,
  deleteEmployee,
};

export default EmployeeApi;