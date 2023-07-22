import { useState } from 'react';
import { useAuth } from 'hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operationsAuth';
import {
  AppBar,
  Button,
  Container,
  TextField,
  Typography,
} from '@mui/material';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const { isAuthError } = useAuth();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLoginNavigete = () => {
    navigate('/login');
  };

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
  };

  return (
    <div>
            <AppBar position="static">
        <Typography variant="h4" sx={{ mb: 4, ml: 17, mt: 4 }}>
          Register
        </Typography>
      </AppBar>
      <Container sx={{ mt: 5 }}>
        <form onSubmit={handleRegister}>
      <TextField
        type="text"
        label="enter Name"
        value={name}
        onChange={event => {
          setName(event.target.value);
        }}
         sx={{ display: 'block', mb: 1 }}
      />
      <TextField
        type="email"
        label="enter Email"
        value={email}
        onChange={event => {
          setEmail(event.target.value);
        }}
         sx={{ display: 'block', mb: 1 }}
      />
      <TextField
        type="password"
        label="enter Password"
        value={password}
        onChange={event => {
          setPassword(event.target.value);
        }}
         sx={{ display: 'block', mb: 2 }}
          />
           <Button type='submit' variant="contained">Register</Button>
          </form>
      {isAuthError && <div>Invalid email or password</div>}
     
        <Button onClick={handleLoginNavigete} variant="outlined" sx={{ mt: 2 }}>go to Login</Button>
        </Container>
    </div>
  );
}