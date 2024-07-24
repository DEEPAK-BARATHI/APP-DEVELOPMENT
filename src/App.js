import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import LoginForm from './Component/Assets/LoginForm';
// import RegisterForm from './Component/Assets/RegisterForm';

// import Terms from './Component/Assets/Terms';

import './App.css';
import LoginForm from './Component/LoginForm';
import RegisterForm from './Component/RegisterForm';
import TermsAndConditions from './Component/Terms';
import Dashboard from './Component/Dashboard';


function App() {
  return (
    <Router>
      <div>
        <video autoPlay muted loop className="background-video">
          <source src={`${process.env.PUBLIC_URL}/homeBg.mp4`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/Login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm/>} />
          <Route path="/terms" element={<TermsAndConditions/>}/>
          <Route path="/Dashboard" element={<Dashboard/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;