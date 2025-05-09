import { useState } from 'react'

import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';

function App() {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />
    },
    {
      path: '/',
      element: <Home />
    },
    {
      path:"/register",
      element: <Register />
    }
  ])


  return (
    <RouterProvider router={router} />
  );
}

export default App
