import "./styles.css";
import { Container, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import {
  Routes,
  Route,
  BrowserRouter as Router,
  NavLink,
  useNavigate
} from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import Signup from "./Signup";
import Login from "./Login";
import Home from "./Home";
import Todos from "./Todos";

export default function App() {
  return (
    <Router>
      <div>
        <section>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/todos" element={<Todos />} />
            <Route
              path="/*"
              element={
                <div>
                  404
                  <NavLink to="/login">Login</NavLink>
                </div>
              }
            />
          </Routes>
        </section>
      </div>
    </Router>
  );
}
