// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'

// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import '@fortawesome/fontawesome-free/css/fontawesome.css';
import '@fortawesome/fontawesome-free/css/solid.css';
import '@fortawesome/fontawesome-free/css/regular.css';
import '@fortawesome/fontawesome-free/css/brands.css';
import './assets/styles/tailwind.css';

// JS로 된 컴포넌트도 TS에서 import 가능
import Admin from './layouts/Admin.tsx';
import PredictMatches from './layouts/PredictMatches.tsx';
import ViewMatchArticles from './layouts/ViewMatchArticles.tsx';
import Matchup from './layouts/Matchup.tsx';

import Auth from './layouts/Auth.jsx';
import Landing from './views/Landing.jsx';
import Profile from './views/Profile.jsx';
import Index from './views/Index.jsx';

// views
import Dashboard from "@/views/admin/Dashboard";
import Maps from "@/views/admin/Maps";
import Settings from "@/views/admin/Settings";
import Tables from "@/views/admin/Tables";

import Login from "@/views/auth/Login.jsx";
import Register from "@/views/auth/Register.jsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/matchup" element={<Matchup />} />
        <Route path="/predictMatches" element={<PredictMatches />} />
        <Route path="/viewMatchArticles" element={<ViewMatchArticles />} />
        <Route path="/admin" element={<Admin />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="maps" element={<Maps />} />
          <Route path="settings" element={<Settings />} />
          <Route path="tables" element={<Tables />} />
          <Route path="" element={<Navigate to="dashboard" />} />
        </Route>
        <Route path="/auth" element={<Auth />} >            
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
          <Route path="" element={<Navigate to="/auth/login" />} />
        </Route>
        <Route path="/landing" element={<Landing />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<Index />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
