import React from 'react';
import { useNavigate } from 'react-router-dom';

const TermsAndConditions = () => {
  const navigate = useNavigate(); // Hook for navigation


  
    // Define inline styles
    const containerStyle = {
      maxWidth: '800px',
      margin: '2rem auto',
      padding: '1rem',
      backgroundColor: 'transparent', // Transparent background
      border: '2px solid rgba(255, 255, 255, 0.2)', // Border to match RegisterForm
      backdropFilter: 'blur(5px)', // Blur effect
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', // Shadow effect
      borderRadius: '10px',
      color: 'white', // White text color
      fontFamily: 'Poppins, sans-serif', // Font family
    };
  
    const headingStyle = {
      fontSize: '2rem',
      marginBottom: '1rem',
      textAlign: 'center',
    };
  
    const subheadingStyle = {
      fontSize: '1.5rem',
      marginTop: '1rem',
    };
  
    const paragraphStyle = {
      fontSize: '1rem',
      lineHeight: '1.6',
      margin: '0.5rem 0',
    };
  
    const buttonStyle = {
      width: '100%',
      height: '45px',
      background: '#fff', // White background
      border: 'none',
      outline: 'none',
      boxShadow: '0 0 2px rgba(255, 255, 255, 0.1)', // Box shadow
      borderRadius: '40px', // Border radius
      fontSize: '16px',
      color: 'white', // Dark text color
      fontWeight: '700',
      cursor: 'pointer',
      marginTop: '1rem',
    };
  
    const buttonHoverStyle = {
      background: '#f0f0f0', // Slightly darker background on hover
    };
  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Terms and Conditions</h1>
      <p style={paragraphStyle}>Welcome to Our Website. These terms and conditions outline the rules and regulations for the use of Our Website.</p>
      
      <h2 style={subheadingStyle}>1. Introduction</h2>
      <p style={paragraphStyle}>By accessing or using our website, you agree to comply with these terms and conditions. If you do not agree with any part of these terms, you must not use our website.</p>
      
      <h2 style={subheadingStyle}>2. Intellectual Property</h2>
      <p style={paragraphStyle}>All content included on our website, such as text, graphics, logos, and images, is the property of Our Website or its content suppliers and is protected by intellectual property laws.</p>
      
      <h2 style={subheadingStyle}>3. User Responsibilities</h2>
      <p style={paragraphStyle}>You agree to use the website only for lawful purposes and in a manner that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the website.</p>
      
      <button
        style={buttonStyle}
        onClick={() => navigate('/register')}
        onMouseEnter={(e) => e.currentTarget.style.background = buttonHoverStyle.background}
        onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
      >
        Back to Registration
      </button>
    </div>
  );
};

export default TermsAndConditions;