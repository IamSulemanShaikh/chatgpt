import React from 'react';
import { Typography, Container } from '@mui/material';

const Adminpage = () => {
    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Admin Dashboard
            </Typography>
            <Typography variant="body1">
                Welcome to the Admin Dashboard!
            </Typography>
        </Container>
    );
};

export default Adminpage;
