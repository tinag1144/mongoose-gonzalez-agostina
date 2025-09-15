import { Router } from "express";
import { 
    createDoctor, 
    getDoctors,
    updateDoctors,
    deleteDoctors
} from "../controllers/doctor.controller.js"

export const doctorRoutes = Router();

doctorRoutes.post("/doctor", createDoctor)
doctorRoutes.get("/doctors", getDoctors)
doctorRoutes.put("/doctor/:id", updateDoctors)
doctorRoutes.delete("/doctor/:id", deleteDoctors)