import express from "express"
import { Orders } from "../models/Orders.model.js"

const orderRouter = express.Router()

orderRouter.post("/orderData", async (req, res) => {
    let data = req.body.order_data
    await data.splice(0, 0, { Order_date: req.body.order_date })
    let eID = await Orders.findOne({ 'email': req.body.email })
    console.log(eID);
    if (eID === null) {
        try {
            await Orders.create({
                email: req.body.email,
                order_data: [data]
            }).then(() => {
                res.json({ success: true })
            })
        } catch (error) {
            console.log(error.message);
            res.send("Server Error", error.message)
        }
    } else {
        try {
            await Orders.findOneAndUpdate({ email: req.body.email },
                { $push: { order_data: data } }).then(() => {
                    res.json({ success: true })
                })
        } catch (error) {
            res.send("Server Error", error.message)
        }
    }
})

orderRouter.post("/myOrderData", async (req, res) => {
    try {
        const myData = await Orders.findOne({ email: req.body.email });
        res.json({ order_data: myData?.order_data || [] });
    } catch (error) {
        res.status(500).send("Server Error: " + error.message);
    }
});

export default orderRouter