import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/Landing-Page/LandingPage';
import Auth from './pages/Auth/Auth';
import Talent from './pages/Talent/Talent';
import { SnackbarProvider } from 'notistack';

const App = () => {
    return (
        <BrowserRouter>
            <SnackbarProvider>
                <Routes>
                    <Route path='/' element={<LandingPage />} />
                    <Route path='/auth' element={<Auth />} />
                    <Route path='/talent' element={<Talent />} />
                </Routes>
            </SnackbarProvider>
        </BrowserRouter>
    );
};

export default App;
