import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../hooks/reduxHooks';

interface Props {
  children: React.ReactElement;
}

const ProtectedRoute: React.FC<Props> = ({ children }) => {
  const { isAuthenticated, initialized } = useAppSelector(state => state.auth);
  if (!initialized) {
    return null; 
  }

  if (isAuthenticated) {
    return children;
  }else{
    return <Navigate to="/" replace />; 
  }

};

export default ProtectedRoute;
