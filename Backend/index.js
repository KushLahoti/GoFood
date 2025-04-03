import express from "express";
import mongoDB from "./db.js";
import router from "./Routes/CreateUser.js";

const app = express();
const port = 5000;

mongoDB()
    .then(() => {
        app.listen(port, () => {
            console.log(`App is listening on port ${port}`);
        });
    })
    .catch(err => {
        console.error("Failed to connect to MongoDB:", err);
    });

app.use(express.json())
app.use('/api', router)

app.get('/', (req, res) => {
    res.send('Hello World!');
});
