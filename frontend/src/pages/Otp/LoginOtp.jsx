import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Register.css';

const LoginOtp = () => {
    const spans = Array.from({ length: 128 });


    return (
        <section>
            <div className="signup-cont">
                {spans.map((_, index) => (
                    <span key={index} className="span"></span>
                ))}
                <div className="signin" style={{ width: "400px"}}>
                    <div className="content">
                        <h2>Enter OTP</h2>
                        <form className="form" onSubmit={handleSubmit}>
                            <div className="inputBx">
                                <input
                                    type="number"
                                    value={otp}
                                    onChange={(e) => setOtp(Number(e.target.value))}
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
                                <button type="submit" disabled={loading} >
                                    {loading===true ? <span className="spinner"></span> : "Login"}
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
