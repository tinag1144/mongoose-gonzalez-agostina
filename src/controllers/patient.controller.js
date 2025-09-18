import { PatientModel } from "../models/patient.model.js";
import { TurnoModel } from "../models/turno.model.js";

// CREATE
export const createPatient = async (req, res) => {
  try {
    const paciente = new PatientModel(req.body);
    await paciente.save();
    res.status(201).json(paciente);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// READ
export const getPatients = async (req, res) => {
  try {
    const pacientes = await PatientModel.find();
    res.json(pacientes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE
export const updatePatient = async (req, res) => {
  try {
    const paciente = await PatientModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(paciente);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE 
export const deletePatient = async (req, res) => {
    const { id } = req.params;
    
  try {
    // Encuentra y "elimina" el paciente 
    await PatientModel.findByIdAndUpdate(id, 
      {deletedAt: new Date()},
      { new: true} 
    ); //eliminacion logica
    await TurnoModel.deleteMany( { patient: id} ); //elimincacion en cascada

   
    res.status(200).json({
      ok: true,
      msg: "Paciente y sus turnos eliminados correctamente"
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      ok: false,
      msg: "Error interno del servidor"
    });
  }
};
