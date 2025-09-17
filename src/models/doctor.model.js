import mongoose, { model, Schema, Types } from "mongoose";

export const doctorSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    especialidad: {
        type: String,
        required: true
    }, 
    patients: [{ //doc referencial 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'PatientSchema'
    }]
}, {
    versionKey: false
});

export const DoctorModel = model("Doctor", doctorSchema);