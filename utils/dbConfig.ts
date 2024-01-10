import {connect} from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const url:string =  process.env.DATABASE_URL!;

export const dbConfig = ()=>{
    try {
        return connect(url).then(()=>{
            console.log("database connected")
        }).catch(()=> console.error());
    } catch (error) {
        return error
    }
};