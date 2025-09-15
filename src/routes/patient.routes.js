import { Router } from "express";
import { 
    createPatient, 
    getPatients, 
    updatePatient, 
    deletePatient } from "../controllers/patient.controller.js";

    export const patientRouter = Router();

// Rutas para pacientes
patientRouter.post("/patient", createPatient); 
patientRouter.get("/patients", getPatients); 
patientRouter.put("/patient/:id", updatePatient); 
patientRouter.delete("/patient/:id", deletePatient);