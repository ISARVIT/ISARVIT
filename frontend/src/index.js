import {HashRouter, Routes, Route} from 'react-router-dom';
import ReactDOM from 'react-dom';
import React from 'react';

import './Source/index.css';
import LandingPage from './Pages/LandingPage';
import Login from './Pages/Login';
import UserHome from './Pages/UserHome';
import Forms from './Pages/Forms';

ReactDOM.render(
  <HashRouter>
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/login' element={<Login />} />
      <Route path='/user' element={<UserHome />} />
      <Route path='/forms' element={<Forms />} />
    </Routes>
  </HashRouter>
  ,document.getElementById('root'));
