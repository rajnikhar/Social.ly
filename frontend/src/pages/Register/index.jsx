import React, { useEffect, useState } from 'react';
import '../../styles/Register.css'
import { Link } from 'react-router-dom';

const Register = () => {

    const spans = Array.from({ length: 128 })

    const [details, setDetails] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        dob: '',
        email: '',
        password: '',
        username: '',
        gender: '',
        mobile: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;

        setDetails({
            ...details,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(details);
    }


    return (
        <section>
            <div className="signup-cont">
                {spans.map((_, index) => (
                    <span key={index} className="span"></span>
                ))}
                <div className="signin">
                    <div className="content">
                        <h2>Register</h2>
                        <form className="form" onSubmit={handleSubmit}>
                            <div className="inputGrid">
                                <div className="inputBx">
                                    <input 
                                    type="text" 
                                    name="firstName" 
                                    value={details.firstName}
                                    onChange={handleChange}
                                    required />
                                    <i>First Name</i>
                                </div>
                                <div className="inputBx">
                                    <input 
                                    type="text" 
                                    name="middleName" 
                                    value={details.middleName}
                                    onChange={handleChange}
                                    />
                                    <i>Middle Name</i>
                                </div>
                                <div className="inputBx">
                                    <input 
                                    type="text" 
                                    name="lastName" 
                                    value={details.lastName}
                                    onChange={handleChange}
                                    required />
                                    <i>Last Name</i>
                                </div>
                                <div className="inputBx">
                                    <input 
                                    type="date" 
                                    name="dob" 
                                    value={details.dob}
                                    onChange={handleChange}
                                    required />
                                    <i>Date of Birth</i>
                                </div>
                                <div className="inputBx">
                                    <input 
                                    type="text" 
                                    name="username" 
                                    value={details.username}
                                    onChange={handleChange}
                                    required />
                                    <i>Username</i>
                                </div>
                                <div className="inputBx">
                                    <input 
                                    type="email" 
                                    name="email" 
                                    value={details.email}
                                    onChange={handleChange}
                                    required />
                                    <i>Email</i>
                                </div>
                                <div className="inputBx">
                                    <input 
                                    type="password" 
                                    name="password" 
                                    value={details.password}
                                    onChange={handleChange}
                                    required />
                                    <i>Password</i>
                                </div>
                                <div className="inputBx">
                                    <input 
                                    type="number" 
                                    name="mobile" 
                                    value={details.mobile}
                                    onChange={handleChange}
                                    required />
                                    <i>Mobile</i>
                                </div>
                                <div className="inputBx">
                                    <select className='gender-select' name="gender" 
                                    value={details.gender}
                                    onChange={handleChange}
                                    required 
                                    >
                                        <option value="" disabled selected>Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>
                            <div className="inputBx">
                                <input 
                                type="file" 
                                name="profilePicture" 
                                accept="image/*" />
                                <i>Profile Picture</i>
                            </div>
                            <div className="links">
                                <Link to="/login">
                                    Already have an account ?
                                </Link>
                            </div>
                            <div className="inputBx">
                                <input 
                                type="submit" 
                                value="Register"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;