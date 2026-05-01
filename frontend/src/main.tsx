import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/login/login.jsx';
import UserList from './components/users/UserList/userlist.jsx';
import UserRegister from './components/users/UserRegister/userregister.js';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/userlist" element={<UserList />} />
        <Route path='/registrar' element={<UserRegister/>}/>
      </Routes>
    </BrowserRouter>

  </StrictMode>,
)
