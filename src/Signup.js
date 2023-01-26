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
import { async } from "@firebase/util";

const Signup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onSubmit = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        alert(user);
        navigate("/login");
      })
      .catch((error) => {
        const { errorCode, errorMessage } = error;
        alert(errorCode, errorMessage);
      });
  };

  return (
    <main>
      <section>
        <div>
          <div>
            <h1>FocusApp</h1>
            <h1>Signup</h1>
            <form>
              <div>
                <label htmlFor="email-address">Email address</label>
                <input
                  type="email"
                  label="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Email address"
                />
              </div>

              <div>
                <label htmlFor="password">password</label>
                <input
                  type="password"
                  label="Create password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Email address"
                />
              </div>

              <button type="submit" onClick={onSubmit}>
                Sign up
              </button>
            </form>

            <p>
              Already have an account? <NavLink to="/login">Sign in</NavLink>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Signup;
