import { Router } from "express";
import { patientRouter } from "./patient.routes.js";
import { doctorRoutes } from "./doctor.routes.js";
import { historyRouter } from "./historyC.routes.js";

export const routes = Router();

routes.use(patientRouter);
routes.use(doctorRoutes);
routes.use(historyRouter);