import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import axios from 'axios'

const SignUp = () => {

    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", geolocation: "" })

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/api/createuser", {
                name: credentials.name,
                email: credentials.email,
                password: credentials.password,
                location: credentials.geolocation
            });

            console.log(response.data);
            if (!response.data.success) {
                alert("Enter Valid Credentials");
            }
        } catch (error) {
            console.error("Axios error:", error);
            alert("Something went wrong!");
        }
    }

    const onChange = (event) => {
        setCredentials({ ...credentials, [event.target.name]: event.target.value })
    }

    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">User Name</label>
                    <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" name='email' value={credentials.email} id="exampleInputEmail1" aria-describedby="emailHelp" onChange={onChange} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" name='password' value={credentials.password} id="exampleInputPassword1" onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input type="text" className="form-control" name='geolocation' value={credentials.geolocation} id="geolocation" onChange={onChange} />
                </div>
                <button type="submit" className="m-3 btn btn-success">Sign Up</button>
                <Link to="/login" className='m-3 btn btn-danger '>Already a User</Link>
            </form>
        </div>
    )
}

export default SignUp
