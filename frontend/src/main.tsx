import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/login/login.jsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/userlist" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>

  </StrictMode>,
)
