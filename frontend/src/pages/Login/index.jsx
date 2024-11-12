import React from 'react';
import '../../styles/Login.css'
import { Link } from 'react-router-dom';

const Login = () => {

    const spans = Array.from({ length: 128 })


    return (
        <section>
            <div className="login-cont">
                {spans.map((_, index) => (
                    <span key={index} className="span"></span>
                ))}
                <div className="signin">
                    <div className="content">
                        <h2>Login</h2>
                        <form className='form' >
                            <div className="inputBx">
                                <input 
                                type="email" 
                                value='' 
                                required 
                                />
                                <i>Email</i>
                            </div>
                            <div className="inputBx">
                                <input 
                                type="password" 
                                value=''
                                required
                                />
                                <i>Password</i>
                            </div>
                            <div className="links">
                                <Link to="/forgot-password">Forgot Pasword?</Link>
                                <Link to="/register">Sign Up</Link>
                            </div>
                            <div className="inputBx">
                                <input 
                                type="submit" value="Login"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;