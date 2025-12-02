import React from 'react';
import { Routes, Route } from 'react-router-dom';
import EmployeesPage from './pages/EmployeesPage';
import LoginPage from './pages/LoginPage';
import ProtectedRoute from './components/ProtectedRoute';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route
        path="/employees"
        element={
          <ProtectedRoute>
            <EmployeesPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default App;
