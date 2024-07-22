import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import LoginForm from './Loginform';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [userType, setUserType] = useState('');

    const handleClickOpen = (type) => {
        setUserType(type);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <AppBar position="static" style={{ backgroundColor: '#333' }}>
                <Toolbar>
                    <Typography variant="h6" style={{ flexGrow: 1 }}>
                        Shop Floor Management
                    </Typography>
                    <Button color="inherit" style={{ marginRight: '10px' }} onClick={() => handleClickOpen('Admin')}>Admin Login</Button>
                    <Button color="inherit" onClick={() => handleClickOpen('User')}>User Login</Button>
                </Toolbar>
            </AppBar>
            <LoginForm open={open} onClose={handleClose} userType={userType} />
        </div>
    );
};

export default Navbar;
