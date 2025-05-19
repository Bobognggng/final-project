import React from 'react';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
    return (
        <div id="home-page">
            <div id='login-container-container'>
                <div id='login-container'>
                    <div>
                        <div id='login-title'>
                            Sign up
                        </div>
                        <div id='email-title'>
                            Username
                        </div>
                        <input id='email-input'/>
                        <div id='email-title'>
                            Email
                        </div>
                        <input id='email-input'/>
                        <div id='email-title'>
                            Password
                        </div>
                        <input id='email-input'/>
                        <div id='login-button-container'>
                            <Link to="/auth">
                                <button id='login-register-button'>
                                    Login
                                </button>
                            </Link>
                            <button id='login-login-button'>
                                Register
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;