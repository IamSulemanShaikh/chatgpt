import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button } from '@mui/material';

const LoginForm = ({ open, onClose, userType }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleLogin = () => {
        // Handle login logic here
        console.log(`${userType} login with username: ${username} and password: ${password}`);
        onClose();
        if (userType === 'Admin') {
            history.push('/admin');
        } else {
            history.push('/user');
        }
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>{userType} Login</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    label="Username"
                    type="text"
                    fullWidth
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                    margin="dense"
                    label="Password"
                    type="password"
                    fullWidth
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleLogin} color="primary">
                    Login
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default LoginForm;
