import React, { useState } from 'react';
import LoginForm from '../Loginform/Loginform'
import './Navbar.css';
import Logo from '../../assets/LT-Logo.png'

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
            <nav className="navbar">
                <img src={Logo} alt="" className='logo' />
                <div className="navbar-right">
                <button className="navbar-button" onClick={() => handleClickOpen('Admin')}>Admin</button>
                <button className="navbar-button" onClick={() => handleClickOpen('User')}>User</button>
                </div>
            </nav>
            {open && <LoginForm open={open} onClose={handleClose} userType={userType} />}
        </div>
    );
};

export default Navbar;

