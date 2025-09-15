import { Router } from "express";
import { patientRouter } from "./patient.routes.js";

export const routes = Router();

routes.use(patientRouter);