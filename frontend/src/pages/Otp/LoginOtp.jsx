import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Register.css';
import { useDispatch } from 'react-redux';

const LoginOtp = () => {
    const spans = Array.from({ length: 128 });

    const[otp, setOtp] = useState();

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(otp);
    }


    return (
        <section>
            <div className="signup-cont">
                {spans.map((_, index) => (
                    <span key={index} className="span"></span>
                ))}
                <div className="signin" style={{ width: "400px"}}>
                    <div className="content">
                        <h2>Enter OTP</h2>
                        <form className="form" onSubmit={handleSubmit} >
                            <div className="inputBx">
                                <input
                                    type="number"
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value)}
                                    required
                                />
                                <i>OTP</i>
                            </div>
                            <div className="links">
                                <Link to="/login">
                                    Resend OTP
                                </Link>
                            </div>
                            <div className="inputBx">
                                <button type="submit" >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LoginOtp;
