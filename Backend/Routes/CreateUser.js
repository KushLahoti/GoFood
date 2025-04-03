import express from "express"
import { User } from "../models/User.model.js"
import { body, validationResult } from "express-validator"

const router = express.Router()

router.post("/createuser", [body('email').isEmail(),
body('password', "Password must be atleast of length 8").isLength({ min: 8 }),
body('name').isLength({ min: 3 })], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    try {
        await User.create({
            name: req.body.name,
            password: req.body.password,
            email: req.body.email,
            location: req.body.location
        })
        res.json({ success: true });
    } catch (error) {
        console.log(error)
        res.json({ success: false })
    }
})

export default router
