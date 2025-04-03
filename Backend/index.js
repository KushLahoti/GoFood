import express from "express";
import cors from "cors";
import mongoDB from "./db.js";
import router from "./Routes/CreateUser.js";

const app = express();
const port = 5000;

app.use(cors({
    origin: "http://localhost:5173",
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

app.use('/api', router);

app.get('/', (req, res) => {
    res.send('Hello World!');
});
