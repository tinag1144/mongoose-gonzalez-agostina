import mongoose, { Schema, model, Types } from "mongoose";

export const historySchema = Schema({
    diagnoses: { //embebido
        date: {
            type: Date,
            required: true
        }, 
        description: {
            type: String,
            required: true
        }, 
        doctor: { //dos referecial
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Doctor',
            required: true
        }
    },
    patient:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient',
        required: true
    },
    allergies: {
        type: String
    }, 
    medication: {
        type: String 
    }

}); 

export const HistoryModel = model("HistoriaClinica", historySchema)