import { HistoryModel } from "../models/clinicHistory.model.js";

// CREATE
export const createHistory = async (req, res) => {
  try {
    const history= new HistoryModel(req.body);
    await history.save();
    res.status(201).json(history);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// READ
export const getHistories = async (req, res) => {
  try {
    const histories = await HistoryModel.find().populate('diagnoses.doctor');
    res.json(histories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE
export const updateHistories = async (req, res) => {
  try {
    const history = await HistoryModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(history);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE 
export const deleteHistory = async (req, res) => {
    const { id } = req.params;
  try { 
    const deleteHistory = await HistoryModel.findByIdAndDelete(id);

    if (!deleteHistory) {
      return res.status(404).json({
        ok: false,
        msg: "Historia clinica no encontrada"
      });
    }

    res.status(200).json({
      ok: true,
      msg: "Historia clinica eliminado correctamente",
      data: deleteHistory
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      ok: false,
      msg: "Error interno del servidor"
    });
  }
};
