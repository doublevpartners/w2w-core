import { AppDataSource } from "./db/db";
import app from "./app";
import { PORT } from "./config/config";

const main = async () => {
    try {
        await AppDataSource.initialize().then(() => {
            console.log("Data Source has been initialized!")
        })
        .catch((err) => {
            console.error("Error during Data Source initialization", err)
        });
        app.listen(PORT);
        console.log(`*** Server on port ${PORT} ***`);
    } catch (error){
        console.error(error);
    }
};

main();