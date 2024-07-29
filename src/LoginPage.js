import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const [inputType, setInputType] = useState('password');
  const [mobileNumber, setMobileNumber] = useState('');
  const [pin, setPin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSignUp = () => {
    const container = document.querySelector('.rotateContainer');
    if (container) {
      container.classList.add('rotateOut');
      setTimeout(() => {
        navigate('/signup');
      }, 1500); 
    }
  };

  const handleLogin = () => {
    // Retrieve stored credentials
    const storedCredentials = JSON.parse(localStorage.getItem('userCredentials') || '{}');

    const valid = (inputType === 'password' ? storedCredentials.password : storedCredentials.pin) &&
                   storedCredentials.mobileNumber === mobileNumber &&
                   (inputType === 'password' ? password === storedCredentials.password : pin === storedCredentials.pin);

    if (valid) {
      setError('');
      console.log(`Logged in with Mobile Number: ${mobileNumber}, ${inputType === 'password' ? `Password: ${password}` : `PIN: ${pin}`}`);
      navigate('/home');
    } else {
      setError('Invalid credentials.');
    }
  };

  return (
    <div className="container">
      <div className="rotateContainer rotateIn">
        <div className="loginContainer">
          <h2 className="header">Login</h2>
          <input
            type="text"
            placeholder="Mobile Number"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            className="input"
          />
          <label className="inputTypeLabel">Change Input Type</label>
          <div className="radioButtons">
            <label>
              <input
                type="radio"
                name="inputType"
                value="password"
                checked={inputType === 'password'}
                onChange={() => setInputType('password')}
                className="radioInput"
              />
              Password
            </label>
            <label>
              <input
                type="radio"
                name="inputType"
                value="pin"
                checked={inputType === 'pin'}
                onChange={() => setInputType('pin')}
                className="radioInput"
              />
              PIN
            </label>
          </div>
          {inputType === 'password' ? (
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input"
            />
          ) : (
            <input
              type="password"
              placeholder="PIN"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              className="input"
            />
          )}
          <button onClick={handleLogin} className="button">
            Login
          </button>
          {error && (
            <div className="errorPopup">
              {error}
            </div>
          )}
          <p className="signupText">
            Don't have an account? <span className="link" onClick={handleSignUp}>SignUp here</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
