import { config } from "dotenv";
// config({path: `${__dirname}/../environments/${process.env.APP_ENV}.env`});
config();



export const PORT = process.env.PORT || 3000;