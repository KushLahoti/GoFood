import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
    const [credentials, setCredentials] = useState({ email: "", password: "" })
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post("http://localhost:5000/api/loginuser", credentials)

            if (!response.data.success) return alert("Enter Valid Credentials")

            localStorage.setItem("userEmail", credentials.email.trim())
            localStorage.setItem("authToken", response.data.authToken)

            navigate("/")
        } catch (error) {
            console.error("Login Error:", error)
            alert("Something went wrong while logging in")
        }
    }

    const onChange = (e) =>
        setCredentials({ ...credentials, [e.target.name]: e.target.value })

    return (
        <div className='container d-flex justify-content-center align-items-center' style={{ height: "90vh" }}>
            <form onSubmit={handleSubmit} className='w-100' style={{ maxWidth: "500px" }}>
                <h2 className='text-center mb-4 text-success'>Login to GoFood</h2>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name='email'
                        value={credentials.email}
                        onChange={onChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        name='password'
                        value={credentials.password}
                        onChange={onChange}
                        required
                    />
                </div>
                <div className='d-flex justify-content-between'>
                    <button type="submit" className="btn btn-success">Login</button>
                    <Link to="/signup" className='btn btn-danger'>Not a User?</Link>
                </div>
            </form>
        </div>
    )
}

export default Login
