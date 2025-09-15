import { Router } from "express";
import { 
    createHistory, 
    deleteHistory, 
    getHistories, 
    updateHistories } from "../controllers/history.controller.js";


export const historyRouter = Router();

historyRouter.post("/history", createHistory);
historyRouter.get("/histories", getHistories);
historyRouter.put("/history/:id", updateHistories);
historyRouter.delete("/history/:id", deleteHistory);