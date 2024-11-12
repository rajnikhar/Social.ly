import React from 'react';
import '../../styles/Register.css'
import { Link } from 'react-router-dom';

const Register = () => {

    const spans = Array.from({ length: 128 })


    return (
        <section>
            <div className="signup-cont">
                {spans.map((_, index) => (
                    <span key={index} className="span"></span>
                ))}
                <div className="signin">
                    <div className="content">
                        <h2>Register</h2>
                        <form className="form" >
                            <div className="inputGrid">
                                <div className="inputBx">
                                    <input 
                                    type="text" 
                                    name="firstName" 
                                    required />
                                    <i>First Name</i>
                                </div>
                                <div className="inputBx">
                                    <input 
                                    type="text" 
                                    name="middleName" 
                                    />
                                    <i>Middle Name</i>
                                </div>
                                <div className="inputBx">
                                    <input 
                                    type="text" 
                                    name="lastName" 
                                    required />
                                    <i>Last Name</i>
                                </div>
                                <div className="inputBx">
                                    <input 
                                    type="date" 
                                    name="dob" 
                                    required />
                                    <i>Date of Birth</i>
                                </div>
                                <div className="inputBx">
                                    <input 
                                    type="text" 
                                    name="username" 
                                    required />
                                    <i>Username</i>
                                </div>
                                <div className="inputBx">
                                    <input 
                                    type="email" 
                                    name="email" 
                                    required />
                                    <i>Email</i>
                                </div>
                                <div className="inputBx">
                                    <input 
                                    type="password" 
                                    name="password" 
                                    required />
                                    <i>Password</i>
                                </div>
                                <div className="inputBx">
                                    <input 
                                    type="text" 
                                    name="mobile" 
                                    required />
                                    <i>Mobile</i>
                                </div>
                                <div className="inputBx">
                                    <select className='gender-select' name="gender" required 
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