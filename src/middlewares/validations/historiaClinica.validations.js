import { body } from "express-validator";

export const createHistoryValidator = [
  body("diagnoses.date")
    .notEmpty().withMessage("La fecha del diagnóstico es obligatoria")
    .isISO8601().withMessage("La fecha debe estar en formato válido (YYYY-MM-DD)"),
  body("diagnoses.description")
    .notEmpty().withMessage("La descripción del diagnóstico es obligatoria"),
  body("diagnoses.doctor")
    .notEmpty().withMessage("El doctor es obligatorio")
    .isMongoId().withMessage("Debe ser un ObjectId válido"),
  body("allergies")
    .optional().isString().withMessage("Las alergias deben ser texto"),
  body("medication")
    .optional().isString().withMessage("La medicación debe ser texto"),
];
