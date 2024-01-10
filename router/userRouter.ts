import { Router } from "express";
import { createAttendance } from "../controller/userController";

const router: Router = Router();

router.route("/createuser").post(createAttendance);
