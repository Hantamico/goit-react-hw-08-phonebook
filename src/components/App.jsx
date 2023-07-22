import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { refreshUser, fetchContacts } from 'redux/auth/operationsAuth';

import Content from './Content/Content';
import LoginPage from 'pages/login/LoginPage';
import RegisterPage from 'pages/register/RegisterPage';
import ProtectedRoute from 'routes/ProtectedRoute';
import LoadingSpinner from './LoadingSpinner/LoadingSpinner';

export default function App() {
  const { isLoggedIn, isRefreshing } = useAuth();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts())
  });

  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch]);

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn, navigate]);

  if (isRefreshing) {
    return <LoadingSpinner/>
  }

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<RegisterPage />} />
      <Route
        path="/"
        element={
          <ProtectedRoute isLoggedin={isLoggedIn}>
            <Content />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<LoginPage />} />
    </Routes>
  );
}

