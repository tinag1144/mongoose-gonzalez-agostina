import mongoose, { Schema, model, Types } from "mongoose";

export const historySchema = Schema({
    diagnoses: {
        date: {
            type: Date,
            required: true
        }, 
        description: {
            type: String,
            required: true
        }, 
        doctor: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'DoctorModel',
            required: true
        }
    },
    allergies: {
        type: String
    }, 
    medication: {
        type: String 
    }

}); 

export const HistoryModel = model("HistoriaClinica", historySchema)