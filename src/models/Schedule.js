import { Schema, model } from "mongoose";

const scheduleMedical = new Schema(
    {
        patient:{
            type: String,
            required: true
        },
         date_reception:{
             type: Date,
             required: true,
         },
          hour_reception:{
              type: String,
              required: true,
          },
          observations:{
              type: String,
              required: true,
          },
          area:{
              type:String,
              required: true
          },
          status: {
              type:String, 
              required: true,
              default: '1'
          }
    },{
        timestamps: true,
    }
);

export default model("Schedule", scheduleMedical);