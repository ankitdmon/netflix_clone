import React, { useState } from 'react'

import './LoginScreen.css';
import './SignUpScreen';
import SignUpScreen from './SignUpScreen';

function LoginScreen() {

    const [signIn, setSignIn] = useState(false);

    return (
        <div className='loginScreen'>
            <div className='login_background'>
                <img
                    className='loginLogo'
                    src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                    alt="logo" />

                <button 
                onClick={() => setSignIn(true)}
                className='login_button'>
                    Sign in
                </button>

                <div className='login_gradient' />

                <div className='login_body'>
                    {signIn ? (
                        <SignUpScreen />
                    ) : (
                        <>
                            <h1>Unlimited films, Tv programmes and more.</h1>
                            <h2>watch anywhere. Cancel at any time.</h2>
                            <h3>
                                Ready to watch? Enter your email to create
                                or restart your membership
                            </h3>
                            <dev className='login_input'>
                                <form>
                                    <input type="email"
                                        placeholder='Email Address' />
                                    <button
                                        onClick={() => setSignIn(true)}
                                        className='getStarted'>
                                        GET STARTED
                                    </button>
                                </form>
                            </dev>
                        </>
                    )}

                </div>

            </div>
        </div>
    )
}

export default LoginScreen