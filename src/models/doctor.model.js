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
    toJSON: { virtuals: true }, //esto es para ue los "viartuales" aparezcan al convertir a JSON
    versionKey: false
});
 
//Virtual Populate
doctorSchema.virtual("patients", {
    ref: "Turno",  //Modelo intermedio (Turno)
    localField: "_id", //campo en Doctor
    foreignField: "doctor", //campo en Turnos 
    justOne: false
})

export const DoctorModel = model("Doctor", doctorSchema);