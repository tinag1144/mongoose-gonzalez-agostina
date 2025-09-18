import { Router } from "express";
import { 
    createDoctor, 
    getDoctors,
    updateDoctors,
    deleteDoctors
} from "../controllers/doctor.controller.js"
import { createDoctorValidator } from "../middlewares/validations/doctor.validations.js";
import { validator } from "../middlewares/validator.js"
export const doctorRoutes = Router();

doctorRoutes.post("/doctor", createDoctorValidator, validator, createDoctor)
doctorRoutes.get("/doctors", getDoctors)
doctorRoutes.put("/doctor/:id", updateDoctors)
doctorRoutes.delete("/doctor/:id", deleteDoctors)