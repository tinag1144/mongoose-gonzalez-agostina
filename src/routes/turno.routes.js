import { Router } from "express";
import { createTurno, deleteTurno, getTurnos, updateTurno } from "../controllers/turno.controller.js";
import { createTurnoValidator } from "../middlewares/validations/turno.validations.js";
import { validator } from "../middlewares/validator.js"

export const turnoRouter = Router();

turnoRouter.post("/turno", createTurnoValidator, validator, createTurno);
turnoRouter.get("/turnos", getTurnos);
turnoRouter.put("/turno/:id", updateTurno);
turnoRouter.delete("/turno/:id", deleteTurno);