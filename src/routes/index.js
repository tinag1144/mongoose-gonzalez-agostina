import { Router } from "express";
import { patientRouter } from "./patient.routes.js";
import { doctorRoutes } from "./doctor.routes.js";

export const routes = Router();

routes.use(patientRouter);
routes.use(doctorRoutes);