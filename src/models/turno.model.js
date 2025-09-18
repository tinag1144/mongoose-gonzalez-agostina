import mongoose, {Schema, model, Types} from "mongoose"

export const turnoSchema = Schema({
    date: {
        type: Date,
        required: true
    },
    time:{
        type: String,
        required: true
    },
    patient: { //doc referencial
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient',
        required: true
    },
    doctor:{ //doc referencial
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor',
        required: true
    },
    room: { //doc embebido 
        number: {
            type: Number,
            required: true
        }
    }
}); 

export const TurnoModel = model("Turno", turnoSchema)