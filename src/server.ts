import app from "./app";
import { PORT } from "./config/config";

const main = async () => {
    try {
        app.listen(PORT);
        console.log(`*** Server on port ${PORT} ***`);
    } catch (error){
        console.error(error);
    }
};

main();