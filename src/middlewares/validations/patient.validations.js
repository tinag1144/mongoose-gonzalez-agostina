import { body } from "express-validator";

export const createPatientValidator = [
  body("name")
    .notEmpty().withMessage("El nombre es obligatorio")
    .isLength({ min: 2 }).withMessage("El nombre debe tener al menos 2 caracteres"),
  body("lastname")
    .notEmpty().withMessage("El apellido es obligatorio"),
  body("age")
    .isInt({ min: 0 }).withMessage("La edad debe ser un número positivo"),
  body("dni")
    .isNumeric().withMessage("El DNI debe ser un número")
    .isLength({ min: 7, max: 8 }).withMessage("El DNI debe tener entre 7 y 8 dígitos"),
  body("email")
    .isEmail().withMessage("El email no es válido"),
  body("obraSocial.nombre")
    .optional().isString().withMessage("La obra social debe ser un texto"),
  body("obraSocial.numeroAfiliado")
    .optional().isString().withMessage("El número de afiliado debe ser texto"),
];
