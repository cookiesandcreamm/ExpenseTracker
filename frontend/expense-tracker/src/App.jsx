import React from 'react'
import './index.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import Home from "./pages/Dashboard/Home";
import Expense from "./pages/Dashboard/Expense";
import Income from "./pages/Dashboard/Income";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/signUp" exact element={<SignUp />} />
          <Route path="/dashboard" exact element={<Home />} />
          <Route path="/income" exact element={<Income />} />
          <Route path="/expense" exact element={<Expense />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App

const Root = () => {
  //Check if token exists in localStorage
  //getItem looks for a key called "token" in browser's localStorage (where data is stored across page reloads)
  //!! converts a value to a boolean (javascript trick)
  const isAuthenticated = !!localStorage.getItem("token");
  //true = logged in | false == null

  //Redirect to dashboard if authenticated, otherwise login
  return isAuthenticated ? (
    <Navigate to="/dashboard" />
  ) : (
    <Naviage to="/login" />
  );
};