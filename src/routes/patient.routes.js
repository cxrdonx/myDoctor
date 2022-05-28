import {Router} from "express";
import{
    renderPatientForm
}from "../controllers/patient.controller";

const router = Router();

router.get("/patients/new", renderPatientForm);

export default router;