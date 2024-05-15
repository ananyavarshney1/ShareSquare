import React, { useState, useEffect } from 'react';
import './login.css';

const SignUp = () => {
  const [isSignInActive, setIsSignInActive] = useState(false);

  useEffect(() => {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('logIn');
    const container = document.getElementById('container');

    const handleSignUpClick = () => {
      container.classList.add('right-panel-active');
    };

    const handleSignInClick = () => {
      container.classList.remove('right-panel-active');
    };

    signUpButton.addEventListener('click', handleSignUpClick);
    signInButton.addEventListener('click', handleSignInClick);

    // Cleanup function
    return () => {
      signUpButton.removeEventListener('click', handleSignUpClick);
      signInButton.removeEventListener('click', handleSignInClick);
    };
  }, []);

  return (
    <div className={`container ${isSignInActive ? "right-panel-active" : ""}`} id="container">
      <div className="form-container sign-up-container">
        <form action="#">
          <h1>Create Account</h1>
          <span></span>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required/>
          <input type="password" placeholder="Password" required/>
          <input type="checkbox" />I agree to the terms and conditions 
          <button type="submit" className='bt'>Sign Up</button>
        </form>
      </div>
      <div className="form-container log-in-container">
        <form action="#">
          <h1>Log in</h1>
          <span></span>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="#">Forgot password ?</a>
          <button type="submit" className='bt'>Log In</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Already have an Account ?</h1>
            <p>Great ! You can simply log in and continue</p>
            <button className="ghost" id="logIn" >Log In</button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Don't have an Account ?</h1>
            <p>No Problem Sign Up to Shop With Us</p>
            <button className="ghost" id="signUp">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;