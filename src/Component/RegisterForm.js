import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './RegisterForm.css';
import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa';

const RegisterForm = () => {
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [successMessage, setSuccessMessage] = useState(''); // State for success message

  const navigate = useNavigate();

  const handleTermsChange = () => {
    setTermsAccepted(!termsAccepted);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    // Save the user details to local storage (or send to backend)
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    existingUsers.push({
      username: formData.username,
      email: formData.email,
      password: formData.password,
    });
    localStorage.setItem('users', JSON.stringify(existingUsers));

    // Set success message
    setSuccessMessage('Successfully registered! Redirecting to login...');

    // Redirect after a short delay to show the message
    setTimeout(() => {
      navigate('/Login');
    }, 2000);
  };

  return (
    <div className='wrapper'>
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <div className='input-box'>
          <input
            type="text"
            name="username"
            placeholder='Username'
            value={formData.username}
            onChange={handleInputChange}
            required
            aria-label="Username"
          />
          <FaUser className='icon' />
        </div>
        <div className='input-box'>
          <input
            type="email"
            name="email"
            placeholder='Email'
            value={formData.email}
            onChange={handleInputChange}
            required
            aria-label="Email"
          />
          <FaEnvelope className='icon' />
        </div>
        <div className='input-box'>
          <input
            type="password"
            name="password"
            placeholder='Password'
            value={formData.password}
            onChange={handleInputChange}
            required
            aria-label="Password"
          />
          <FaLock className='icon' />
        </div>
        <div className='input-box'>
          <input
            type="password"
            name="confirmPassword"
            placeholder='Confirm Password'
            value={formData.confirmPassword}
            onChange={handleInputChange}
            required
            aria-label="Confirm Password"
          />
          <FaLock className='icon' />
        </div>
        <div className='terms-box'>
          <input
            type="checkbox"
            id="terms"
            checked={termsAccepted}
            onChange={handleTermsChange}
            required
          />
          <label htmlFor="terms">
            I agree to the <a href="/terms">Terms and Conditions</a>
          </label>
        </div>
        <button type='submit' disabled={!termsAccepted}>Register</button>
        {successMessage && <p className='success-message'>{successMessage}</p>}
        <div className='login-link'>
          <p>Already have an account? <Link to="/">Login</Link></p>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;