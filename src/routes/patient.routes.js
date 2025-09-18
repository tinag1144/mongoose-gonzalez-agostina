import { Router } from "express";
import { 
    createPatient, 
    getPatients, 
    updatePatient, 
    deletePatient } from "../controllers/patient.controller.js";
import { createPatientValidator } from "../middlewares/validations/patient.validations.js";
import { validator } from "../middlewares/validator.js";

    export const patientRouter = Router();

// Rutas para pacientes
patientRouter.post("/patient", createPatientValidator, validator, createPatient); 
patientRouter.get("/patients", getPatients); 
patientRouter.put("/patient/:id", updatePatient); 
patientRouter.delete("/patient/:id", deletePatient);