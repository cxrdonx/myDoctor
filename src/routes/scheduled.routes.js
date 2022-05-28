import {Router} from "express";
import{
    renderScheduleForm
}from "../controllers/scheduled.controller";
import { isAuthenticated } from "../helpers/auth";

const router = Router();

router.get("/scheduled/start", isAuthenticated, renderScheduleForm);

export default router;