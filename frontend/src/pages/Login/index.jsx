import React, { useEffect, useState } from 'react';
import '../../styles/Login.css'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/Actions/userActions';

const Login = () => {

    const spans = Array.from({ length: 128 })

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const { loading, message, error } = useSelector(state => state.userAuth)

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password);
        dispatch(loginUser(email, password));
    }

    useEffect(() => {
        if(message){
            console.log(message);
        }
        if(error){
            console.log(error)
        }
    }, [dispatch, message, error])


    return (
        <section>
            <div className="login-cont">
                {spans.map((_, index) => (
                    <span key={index} className="span"></span>
                ))}
                <div className="signin">
                    <div className="content">
                        <h2>Login</h2>
                        <form className='form' onSubmit={handleSubmit}>
                            <div className="inputBx">
                                <input 
                                type="email" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)}
                                required 
                                />
                                <i>Email</i>
                            </div>
                            <div className="inputBx">
                                <input 
                                type="password" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
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