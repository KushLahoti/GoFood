import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
    const [credentials, setCredentials] = useState({ email: "", password: "" })

    let navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/api/loginuser", {
                email: credentials.email,
                password: credentials.password
            });

            console.log(response.data);

            if (!response.data.success) {
                alert("Enter Valid Credentials");
            }

            if (response.data.success) {
                localStorage.setItem("authToken", response.data.authToken)
                console.log(localStorage.getItem("authToken"))
                navigate("/");
            }

        } catch (error) {
            console.error("Login Error:", error);
            alert("Something went wrong while logging in");
        }
    }

    const onChange = (event) => {
        setCredentials({ ...credentials, [event.target.name]: event.target.value })
    }

    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        name='email'
                        value={credentials.email}
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        onChange={onChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        name='password'
                        value={credentials.password}
                        id="exampleInputPassword1"
                        onChange={onChange}
                    />
                </div>
                <button type="submit" className="m-3 btn btn-success">Login</button>
                <Link to="/signup" className='m-3 btn btn-danger '>Not a User</Link>
            </form>
        </div>
    )
}

export default Login
