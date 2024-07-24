import React from 'react';
import { useNavigate,Link } from 'react-router-dom';
import './LoginForm.css';
import { FaUser, FaLock } from 'react-icons/fa';

const LoginForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const username = e.target.username.value;
    const password = e.target.password.value;
    
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.username === username && u.password === password);
    
    if (user) {
      console.log('Login successful');
      navigate('/dashboard');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className='wrapper'>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className='input-box'>
          <input type="text" name="username" placeholder='Username' required aria-label="Username" />
          <FaUser className='icon' />
        </div>
        <div className='input-box'>
          <input type="password" name="password" placeholder='Password' required aria-label="Password" />
          <FaLock className='icon' />
        </div>
        <div className='remember-forgot'>
          <label>
            <input type='checkbox' /> Remember me
          </label>
          <a href="#">Forgot Password?</a>
        </div>
        <button type='submit'>Login</button>
        <div className='register-link'>
          <p>Don't have an account? <Link to="/register">Register</Link></p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;