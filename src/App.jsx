import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Container, Typography } from '@mui/material';
import './App.css';
import AdminDashboard from './pages/Adminpage';
import UserDashboard from './pages/Userpage';

const App = () => {
    return (
        <Router>
            <div className="app">
                <Navbar />
                <Switch>
                    <Route exact path="/">
                        <Container className="main-content" maxWidth="lg">
                            <Typography variant="h2" component="h1" className="title">
                                Shop Floor Management
                            </Typography>
                        </Container>
                    </Route>
                    <Route path="/admin">
                        <AdminDashboard />
                    </Route>
                    <Route path="/user">
                        <UserDashboard />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default App;
