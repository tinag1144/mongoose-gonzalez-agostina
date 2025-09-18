import { body } from "express-validator";

export const createDoctorValidator = [
  body("name")
    .notEmpty().withMessage("El nombre es obligatorio"),
  body("lastname")
    .notEmpty().withMessage("El apellido es obligatorio"),
  body("especialidad")
    .notEmpty().withMessage("La especialidad es obligatoria"),
];
