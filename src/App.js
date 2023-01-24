import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import './App.css';
import ExcerciseDetail from './pages/ExcerciseDetail';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';

const App = () => (
  <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/exercise/:id" element={<ExcerciseDetail />} />
    </Routes>
    <Footer />
  </Box>
);

export default App;
