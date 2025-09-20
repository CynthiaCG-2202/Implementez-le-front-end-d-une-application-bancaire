import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from'./Layout/Layout';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Transactions from './Pages/Transactions';
import User from './Pages/User';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="user" element={<User />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );}

export default App;