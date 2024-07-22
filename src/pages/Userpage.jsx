import React from 'react';
import { Typography, Container } from '@mui/material';

const Userpage = () => {
    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                User Dashboard
            </Typography>
            <Typography variant="body1">
                Welcome to the User Dashboard!
            </Typography>
        </Container>
    );
};

export default Userpage;
