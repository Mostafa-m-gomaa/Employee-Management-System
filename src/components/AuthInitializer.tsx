import React, { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../services/firebase';
import { useAppDispatch } from '../hooks/reduxHooks';
import { setUser } from '../features/authSlice';

const AuthInitializer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const dispatch = useAppDispatch();


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      dispatch(setUser(user));
      console.log(user);
    });
    return () => unsubscribe();
  }, [dispatch]);

  return <>{children}</>;
};

export default AuthInitializer;
