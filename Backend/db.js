import mongoose from "mongoose";
import "dotenv/config"

const mongoURI = process.env.MONGO_URL

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("Connected Successfully to MongoDB");

        const fetchedData = mongoose.connection.db.collection("food_items");

        const fetched_data = await fetchedData.find({}).toArray();
        global.food_items = fetched_data
        // console.log(global.food_items);

    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
};

export default mongoDB;
