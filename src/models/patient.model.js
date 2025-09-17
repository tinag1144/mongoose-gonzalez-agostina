import mongoose, { model, Schema, Types } from "mongoose";

export const patientSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }, 
    dni: {
        type: Number, 
        required: true, 
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true    
    }, 
    doctor: [{ //doc referencial 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'DoctorSchema',
        required: true
    }],
    obraSocial: { //documento embebido 
        nombre: { type: String },
        numeroAfiliado: { type: String }
  },
}, {
    versionKey: false
});

export const PatientModel = model("Patient", patientSchema);