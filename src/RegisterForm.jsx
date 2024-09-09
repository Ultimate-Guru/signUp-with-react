// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BsPeopleFill } from 'react-icons/bs';
import { FaUnlockKeyhole } from 'react-icons/fa6';
import './index.css';

function RegisterForm() {
    return (
        <div className='registerForm'>
            <div className='registerFormBlock'>
                <div id='registerInputs'>
                    <div className='inputs'>
                        <BsPeopleFill
                            style={{
                                width: '50px',
                                fontSize: '20px',
                                marginTop: '13px',
                            }} />

                        <input type="text" placeholder='User' />
                    </div>

                    <div className="inputs">
                        <FaUnlockKeyhole style={{
                            width: '50px',
                            fontSize: '20px',
                            marginTop: '13px',
                        }} />
                        <input type="password" placeholder='Password' />
                    </div>

                    <div className="inputs">
                        <FaUnlockKeyhole style={{
                            width: '50px',
                            fontSize: '20px',
                            marginTop: '13px',
                        }} />
                        <input type="password" placeholder='Confirm Password' />
                    </div>
                </div>

                <div id="registerBtn">
                    <button>SIGN UP</button>
                </div>
                <div id="forgotPassword">
                    <p>Forgot Password?</p>
                </div>
            </div>
        </div>
    );
}

export default RegisterForm;