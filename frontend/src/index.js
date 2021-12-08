import {HashRouter, Routes, Route} from 'react-router-dom';
import ReactDOM from 'react-dom';
import React from 'react';

import './Source/index.css';

import Navbar from './Components/Navbar.js';
import Landing from './Pages/Landing/Landing.js';
import Login from './Pages/Login/Login.js';
import User from './Pages/User/User.js';
import Form from './Pages/Form/Form.js';
import Creator from './Pages/Creator/Creator.js';

ReactDOM.render(
  <HashRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/login' element={<Login />} />
      <Route path='/user' element={<User />} />
      <Route path='/forms' element={<Form />} />
      <Route path='/creator' element={<Creator />} />
    </Routes>
  </HashRouter>
  ,document.getElementById('root'));
