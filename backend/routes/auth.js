import express from "express";
import { login_user, register_user } from "../controllers/authController";

const router = express.Router();

/*
  Auth Routes
  - login <POST>
  - register <POST>
*/

router.post("/login", login_user);
router.post("/register", register_user);

const authRouter = router;
export default authRouter;
