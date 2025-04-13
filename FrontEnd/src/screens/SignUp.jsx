import { Link, useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
import axios from 'axios'

const SignUp = () => {

    const navigate = useNavigate();

    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", geolocation: "" })

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post("http://localhost:5000/api/createuser", {
                name: credentials.name,
                email: credentials.email,
                password: credentials.password,
                location: credentials.geolocation
            })
            if (!response.data.success) return alert("Enter Valid Credentials")
            navigate("/login")
        } catch (error) {
            console.error("SignUp Error:", error)
            alert("Something went wrong!")
        }
    }

    const onChange = (e) => setCredentials({ ...credentials, [e.target.name]: e.target.value })

    return (
        <div className='container d-flex justify-content-center align-items-center' style={{ height: "95vh" }}>
            <form onSubmit={handleSubmit} className='w-100' style={{ maxWidth: "500px" }}>
                <h2 className='text-center mb-4 text-success'>Create Your GoFood Account</h2>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">User Name</label>
                    <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} />
                    <div className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" name='password' value={credentials.password} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="geolocation" className="form-label">Address</label>
                    <input type="text" className="form-control" name='geolocation' value={credentials.geolocation} onChange={onChange} />
                </div>
                <div className='d-flex justify-content-between'>
                    <button type="submit" className="btn btn-success">Sign Up</button>
                    <Link to="/login" className='btn btn-danger'>Already a User?</Link>
                </div>
            </form>
        </div>
    )
}

export default SignUp
