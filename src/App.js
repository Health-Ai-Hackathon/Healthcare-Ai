import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import SignUpForm from './pages/SignUpForm';
import SignInForm from './pages/signinform';
import DoctorDashboard from './pages/DoctorDashboard';
import PatientDashboard from './pages/PatientDashboard';
import AppointmentScheduling from './pages/Appointement';
function Navigation() {
  const location = useLocation();

  return (
    <nav>
      <ul>
        {/* Render the Sign Up link only if the current route is the root page */}
        {location.pathname === "/" && (
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
        )}
        {/* Render the Sign In link only if the current route is the root page */}
        {location.pathname === "/" && (
          <li>
            <Link to="/signin">Sign In</Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/signin" element={<SignInForm />} />
          <Route path="/DoctorDashboard" element={<DoctorDashboard />} />
          <Route path="/PatientDashboard" element={<PatientDashboard />} />
          <Route path="/AppointmentScheduling" element={<AppointmentScheduling />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
