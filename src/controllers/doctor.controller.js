import { DoctorModel } from "../models/doctor.model.js";
import { TurnoModel } from "../models/turno.model.js";

// CREATE
export const createDoctor = async (req, res) => {
  try {
    const doctor = new DoctorModel(req.body);
    await doctor.save();
    res.status(201).json(doctor);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// READ
export const getDoctors = async (req, res) => {
  try {
    const doctores = await DoctorModel.find().populate('patients');
    res.json(doctores);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE
export const updateDoctors = async (req, res) => {
  try {
    const doctor = await DoctorModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(doctor);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE 
export const deleteDoctors = async (req, res) => {
    const { id } = req.params;
    
  try { 
    await DoctorModel.findByIdAndDelete(id);
    await TurnoModel.deleteMany({ doctor: id }); //eliminacino en cascada: eliminar a los turnos asociados a doctor

    res.status(200).json({
      ok: true,
      msg: "Doctor y sus turnos eliminados correctamente"
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      ok: false,
      msg: "Error interno del servidor"
    });
  }
};
