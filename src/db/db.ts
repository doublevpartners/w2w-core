import { DataSource } from "typeorm";
// Using environment variables
import dotenv from "dotenv";
dotenv.config();


export const AppDataSource = new DataSource({
    type: "mongodb",
    url: process.env.MONGODB_URI,
    entities: [`${__dirname}/../models/*.ts`],
    useNewUrlParser: true,
    synchronize: true,
    ssl: true,
    logging: true,
    useUnifiedTopology: true,
    // autoReconnect: true,
});
    
    