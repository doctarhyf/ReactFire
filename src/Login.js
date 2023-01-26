import "./styles.css";
import { Container, Typography, TextField, Box, Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import {
  Routes,
  Route,
  BrowserRouter as Router,
  NavLink,
  useNavigate
} from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";
import { auth } from "./firebase";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/");
        alert(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode, errorMessage);
      });
  };

  return (
    <Container>
      <main>
        <section>
          <Box sx={{ display: "flex", gap: 2, flexDirection: "column" }}>
            <Box>
              <Typography> FocusApp </Typography>
            </Box>

            <Typography variant="subtitle1" color="error">
              Login
            </Typography>
            <form>
              <div>
                <TextField
                  label="email"
                  id="email-address"
                  name="email"
                  type="email"
                  required
                  placeholder="Email address"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <TextField
                  label="password"
                  id="password"
                  name="password"
                  type="password"
                  required
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div>
                <Button variant="contained" onClick={onLogin}>
                  Login
                </Button>
              </div>
            </form>

            <p className="text-sm text-white text-center">
              No account yet? <NavLink to="/signup">Sign up</NavLink>
            </p>

            <p>
              Goto <NavLink to="/todos">Todos</NavLink>
            </p>
          </Box>
        </section>
      </main>
    </Container>
  );
};

export default Login;
