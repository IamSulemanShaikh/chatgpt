import React from 'react';
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Admin from './pages/Adminpage';
import User from './pages/Userpage';
import Landing from './pages/Landing/Landing';



const App = () => {
  
    return (
        <>
         
         <Router>
         <Navbar/>
                <Routes>
                        <Route path="*" excat element={<Landing />} />
                        <Route path="/adminpage" element={<Admin />} />
                        <Route path="/userpage" element={<User />} />
                </Routes>
        </Router>
        </>
    );
};

export default App;