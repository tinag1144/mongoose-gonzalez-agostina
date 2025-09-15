import { Router } from "express";
import { createTurno, deleteTurno, getTurnos, updateTurno } from "../controllers/turno.controller.js";

export const turnoRouter = Router();

turnoRouter.post("/turno", createTurno);
turnoRouter.get("/turnos", getTurnos);
turnoRouter.put("/turno/:id", updateTurno);
turnoRouter.delete("/turno/:id", deleteTurno);