import express from "express"

const dispDataRouter = express.Router()

dispDataRouter.post("/foodData", (req, res) => {
    try {
        console.log(global.food_items);
        res.send([global.food_items])
    } catch (error) {
        console.log(error)
    }
})

export default dispDataRouter