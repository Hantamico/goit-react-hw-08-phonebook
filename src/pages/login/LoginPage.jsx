import { useState } from 'react';
import { useAuth } from 'hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/operationsAuth';
import {
  Alert,
  AppBar,
  Button,
  Container,
  TextField,
  Typography,
} from '@mui/material';



export default function LoginPage() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  console.log({ email, password });

  const { isAuthError } = useAuth();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegisterNavigete = () => {
    navigate('/signup');
  };

  const handleLogin = e => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  return (
    <div>
      <AppBar position='sticky'>
        <Typography variant="h4" sx={{ mb: 4, ml: 17, mt: 4 }}>
          Login
        </Typography>
      </AppBar>
      <Container sx={{mt: 5 }}>
        <form onSubmit={handleLogin}>
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
          {isAuthError && <Alert severity="error" sx={{mb: 2, width: 164}}>Invalid email or password</Alert>}
          <Button type="submit" variant="contained">
            Login
          </Button>
        </form>

        <Button
          onClick={handleRegisterNavigete}
          variant="outlined"
          sx={{ mt: 2 }}
        >
          go to Register
        </Button>
      </Container>
    </div>
  );
}

