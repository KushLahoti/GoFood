import express from "express";
import cors from "cors";
import mongoDB from "./db.js";
import userRouter from "./Routes/CreateUser.js";
import dataRouter from "./Routes/DisplayData.js"
import orderRouter from "./Routes/OrderData.js";

const app = express();
const port = 5000;

app.use(cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"]
}));

app.use(express.json());

mongoDB()
    .then(() => {
        app.listen(port, () => {
            console.log(`App is listening on port ${port}`);
        });
    })
    .catch(err => {
        console.error("Failed to connect to MongoDB:", err);
    });

app.use('/api', userRouter);
app.use('/api', dataRouter);
app.use('/api', orderRouter);

app.get('/', (req, res) => {
    res.send('Hello World!');
});
