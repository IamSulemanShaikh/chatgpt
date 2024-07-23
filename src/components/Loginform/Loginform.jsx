import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Loginform.css';
import Cross_icon from '../../assets/cross_icon.png'

const Loginform = ({ open, onClose, userType }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    // const handleLogin = async () => {
    //     try {
    //         const response = await axios.post(`http://localhost:5000/api/auth/${userType.toLowerCase()}/login`, {
    //             username,
    //             password,
    //         });
    //         const { token } = response.data;
    //         localStorage.setItem('token', token);
    //         onClose();
    //         if (userType === 'Admin') {
    //             navigate('/admin');
    //         } else {
    //             navigate('/user');
    //         }
    //     } catch (error) {
    //         console.error('Login failed', error);
    //         alert('Invalid credentials');
    //     }
    // };

    //will delete later should use the above one

    const handleLogin = () => {
        // Handle login logic here
        console.log(`${userType} login with username: ${username} and password: ${password}`);
        onClose();
        if (userType === 'Admin') {
            navigate('/admin');
        } else {
            navigate('/user');
        }
    };

    if (!open) return null;

    return (
        <div className="admin-popup">
            <div className="admin-popup-container">
                <div className='admin-popup-title'> 
                <h2>{userType} Login</h2>
                <img onClick={onClose} src={Cross_icon} alt="" />
                </div>
                
                <div className='admin-popup-inputs'>
                <input
                    type="text"
                    placeholder="Enter Your Username"
                    value={username}
                    required
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    required
                    onChange={(e) => setPassword(e.target.value)}
                />
                </div>
                    <button onClick={handleLogin}>Login</button>
                    <div className="forgot-password">Forgot Password? <span className='click'>Click Here!</span></div>
            </div>
        </div>
    );
};

export default Loginform;