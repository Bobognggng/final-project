import React from 'react';
import { Link } from 'react-router-dom';

const AuthPage = () => {
    return (
        <div id="home-page">
            <div id='login-container-container'>
                <div id='login-container'>
                    <div>
                        <div id='login-title'>
                            Login
                        </div>
                        <div id='email-title'>
                            Email
                        </div>
                        <input id='email-input'/>
                        <div id='email-title'>
                            Password
                        </div>
                        <input id='email-input'/>
                        <div id='login-button-container'>
                            <Link to="/register">
                                <button id='login-register-button'>
                                    Register
                                </button>
                            </Link>
                            <button id='login-login-button'>
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthPage;