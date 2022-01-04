import db from "../configs/db";
import { getPatchableProps, sanitizeEmployee } from "./utils";

export const get_all_employees = async (req, res) => {
  const { page, rowCount } = req.params;

  const employeeCount = await db.user.count();
  const allEmployees = await db.user.findAll({
    where: {
      isAdmin: false,
    },
    limit: rowCount || 10,
    offset: page * rowCount - rowCount || 0,
  });

  res.send({
    result: "OK",
    employeeList: allEmployees.map(sanitizeEmployee),
    hasNextPage: page * rowCount < employeeCount,
  });
};

export const create_employee = async (req, res) => {
  const { name, surname, email, department, phone, password } = req.body;

  const registeredEmployee = await db.user.create({
    name,
    surname,
    department,
    email,
    phone,
    password,
  });

  res.send({ result: "OK", createdAt: registeredEmployee.createdAt });
};

export const get_employee_by_id = async (req, res) => {
  const selectedEmployee = await db.user.findAll({
    where: {
      id: req.params.id,
    },
  });

  const employeeData = selectedEmployee.length
    ? { employee: sanitizeEmployee(selectedEmployee) }
    : {};

  res.send(Object.assign({ result: "OK" }, employeeData));
};

export const update_employee = async (req, res) => {
  await db.user.update(getPatchableProps(req.body), {
    where: { id: req.params.id },
  });

  res.send({ result: "OK" });
};

export const delete_employee = async (req, res) => {
  const result = await db.user.destroy({
    where: {
      id: req.params.id,
    },
  });

  if (result === 1)
    res.send({ result: "OK", message: "general_employee_deleted_text" });
  if (result === 0)
    res.send({
      result: "OK",
      message: "general_employee_already_deleted_text",
    });
};
