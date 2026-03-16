import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
mongoose.Promise = global.Promise;
const connect = mongoose.connection;
mongoose.set("strictQuery", true);
export const connectDB = async () => {
    const url = process.env.DATABASE_URL || "";
    connect.on("connected", () => {
        console.log("MongoDB Connection Established");
    });
    connect.on("reconnected", () => {
        console.log("MongoDB Connection Reestablished");
    });
    connect.on("disconnected", () => {
        console.log("MongoDB Connection Disconnected");
        console.log("Trying to reconnect to Mongo...");
        setTimeout(() => {
            mongoose.connect(url);
        }, 3000);
    });
    connect.on("close", () => {
        console.log("Mongo Connection Closed");
    });
    connect.on("error", (error) => {
        console.log("Mongo Connection Error: " + error);
    });
    await mongoose.connect(url).catch((error) => console.log(error));
};
//# sourceMappingURL=database.js.map