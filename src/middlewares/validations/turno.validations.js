import { body } from "express-validator";

export const createTurnoValidator = [
  body("date")
    .notEmpty().withMessage("La fecha es obligatoria")
    .isISO8601().withMessage("La fecha debe tener formato válido (YYYY-MM-DD)"),
  body("time")
    .notEmpty().withMessage("La hora es obligatoria")
    .matches(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/).withMessage("La hora debe estar en formato HH:mm"),
  body("patient")
    .notEmpty().withMessage("El paciente es obligatorio")
    .isMongoId().withMessage("El paciente debe ser un ObjectId válido"),
  body("doctor")
    .notEmpty().withMessage("El doctor es obligatorio")
    .isMongoId().withMessage("El doctor debe ser un ObjectId válido"),
];
