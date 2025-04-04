import express from "express"
import { User } from "../models/User.model.js"
import { body, validationResult } from "express-validator"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

const router = express.Router()

const jwtSecret = "MyNameIsKushLahoti!@#$%^&*"

router.post("/createuser", [body('email').isEmail(),
body('password', "Password must be atleast of length 8").isLength({ min: 8 }),
body('name').isLength({ min: 4 })], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const salt = await bcrypt.genSalt(10);
    let secPassword = await bcrypt.hash(req.body.password, salt)

    try {
        await User.create({
            name: req.body.name,
            password: secPassword,
            email: req.body.email,
            location: req.body.location
        })
        res.json({ success: true });
    } catch (error) {
        console.log(error)
        res.json({ success: false })
    }
})

router.post("/loginuser", [body('email').isEmail(),
body('password', "Password must be atleast of length 8").isLength({ min: 8 })], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    let email = req.body.email
    try {
        let userData = await User.findOne({ email });
        if (!userData) {
            return res.status(400).json({ erros: "Invalid Login Credentials" })
        }

        const compPassword = await bcrypt.compare(req.body.password, userData.password)

        if (!compPassword) {
            return res.status(400).json({ erros: "Invalid Login Credentials" })
        }

        const data = {
            user: {
                id: userData._id
            }
        }

        const authToken = jwt.sign(data, jwtSecret)

        return res.json({ success: true, authToken: authToken })

    } catch (error) {
        console.log(error)
        res.json({ success: false })
    }
})

export default router
