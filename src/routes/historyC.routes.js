import { Router } from "express";
import { 
    createHistory, 
    deleteHistory, 
    getHistories, 
    updateHistories } from "../controllers/history.controller.js";
import { createHistoryValidator } from "../middlewares/validations/historiaClinica.validations.js";
import { validator } from "../middlewares/validator.js"


export const historyRouter = Router();

historyRouter.post("/history", createHistoryValidator, validator, createHistory);
historyRouter.get("/histories", getHistories);
historyRouter.put("/history/:id", updateHistories);
historyRouter.delete("/history/:id", deleteHistory);