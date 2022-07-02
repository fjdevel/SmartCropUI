import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import UserList  from './pages/user-list';
import InicioPage  from './pages/inicio';
import LoginPage  from './pages/Login/LoginPage';
import AdminPage  from './pages/AdminPage/AdminPage';
import { Register } from './pages/Login/components';

import Navbar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/" element={<InicioPage/>}/>
        <Route path="/users" element={<UserList/>}/>
        <Route path="/dashboardAdmin" element={<AdminPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
