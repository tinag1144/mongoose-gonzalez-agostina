import { TurnoModel } from "../models/turno.model.js";

// CREATE
export const createTurno = async (req, res) => {
  try {
    const turno = new TurnoModel(req.body);
    await turno.save();
    res.status(201).json(turno);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// READ
export const getTurnos = async (req, res) => {
  try {
    const turnos = await TurnoModel.find().populate('patient').populate('doctor');
    res.json(turnos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE
export const updateTurno = async (req, res) => {
  try {
    const turno = await TurnoModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(turno);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE 
export const deleteTurno = async (req, res) => {
    const { id } = req.params;
  try {
    const deleteTurno = await TurnoModel.findByIdAndDelete(id);

    if (!deleteTurno) {
      return res.status(404).json({
        ok: false,
        msg: "Paciente no encontrado"
      });
    }

    res.status(200).json({
      ok: true,
      msg: "Turno eliminado correctamente",
      data: deletedPatient
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      ok: false,
      msg: "Error interno del servidor"
    });
  }
};
