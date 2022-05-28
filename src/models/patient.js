import { Schema, model } from "mongoose";

const PatientSchema = new Schema(
    {
        name: {
            type: String,
            required: true,

        },
          telefono:{
              type: Number,
              required: true,

          },
          edad :{
              type: Number,
              required: true,
          },
          dpi: {
              type: Number,
              required: true,
          },
          status: {
              type: Number,
              required: true
          },
          medical_history:{ 
              type: String,
              required: true
        },
        
        
    },{
        timestamps: true,
    }
);
export default model("Patient", PatientSchema);