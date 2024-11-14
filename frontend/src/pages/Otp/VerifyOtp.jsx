import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../../styles/Login.css';

const OTPLogin = () => {
    const [otp, setOtp] = useState('');
    const spans = Array.from({ length: 128 });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(otp);
    }


    return (
        <section>
            <div className="login-cont">
                {spans.map((_, index) => (
                    <span key={index} className="span"></span>
                ))}
                <div className="signin">
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
                            <div className="inputBx">
                                <input type="submit" value="Login" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OTPLogin;
