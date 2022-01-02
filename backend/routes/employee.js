import express from "express";
import {
  create_employee,
  delete_employee,
  get_all_employees,
  get_employee_by_id,
  update_employee,
} from "../controllers/employeeController";

const router = express.Router();

/*
  Employee Routes
  - /employee <GET> - Get All Employees
  - /employee/create <POST> - Create Employee Record
  - /employee/:id <GET> - Get Employee Data
  - /employee/:id <PATCH> - Update Employee
  - /employee/:id <DELETE> - Delete Employee
*/

router.get("/", get_all_employees);
router.post("/create", create_employee);
router.get("/:id", get_employee_by_id);
router.patch("/:id", update_employee);
router.delete("/:id", delete_employee);

const employeeRouter = router;
export default employeeRouter;
