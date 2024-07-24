import React from 'react';
import './Dashboard.css'; // Import the CSS file for styling

const Dashboard = () => {
  const handleLogout = () => {
    // Logic for logging out (e.g., clearing tokens, redirecting, etc.)
    console.log('Logged out');
    // For example, redirect to login page
    window.location.href = '/login'; 
  };

  return (
    <div className="dashboard">
      <header className="navbar-container">
        <nav className="navbar">
          <div className="logo">Corporate Events</div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#events">Events</a></li>
            <li><a href="#clients">Clients</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#login" className="login-button">Login</a></li>
            <li><button onClick={handleLogout} className="logout-button">Logout</button></li>
          </ul>
        </nav>
      </header>
      <main className="main-content">
        <section id="home" className="hero">
          <h1>Welcome to Corporate Events Management</h1>
          <p>Efficiently manage and execute your corporate events with ease.</p>
          <button className="cta-button">Get Started</button>
        </section>
        <section id="services" className="section">
          <h2>Our Services</h2>
          <p>We offer a range of services to make your corporate events successful.</p>
        </section>
        <section id="events" className="section">
          <h2>Upcoming Events</h2>
          <p>View and manage your upcoming events with our easy-to-use dashboard.</p>
        </section>
        <section id="clients" className="section">
          <h2>Clients</h2>
          <p>Manage client details and interactions efficiently.</p>
        </section>
        <section id="contact" className="section">
          <h2>Contact Us</h2>
          <p>Get in touch with our support team for any inquiries.</p>
        </section>
      </main>
      <footer className="footer">
        <p>&copy; 2024 Corporate Events Management. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Dashboard;
