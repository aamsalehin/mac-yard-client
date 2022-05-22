import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import "./Login.css";
import Spinnerr from "../Spinner/Spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [signInWithGoogle, userG] = useSignInWithGoogle(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordInput = (e) => {
    setPassword(e.target.value);
  };
  const handleLogIn = async (e) => {
    e.preventDefault();
    await signInWithEmailAndPassword(email, password);
    const { data } = await axios.post(
      "https://still-gorge-64636.herokuapp.com/login",
      { email }
    );
    localStorage.setItem("accessToken", data.accessToken);
    navigate(from, { replace: true });
  };
  if (loading || sending) {
    return <Spinnerr></Spinnerr>;
  }
  // if (user) {
  //   navigate(from, { replace: true });
  // }
  if (userG) {
    // navigate("/");
    navigate(from, { replace: true });
  }

  const handleSignInGoogle = () => {
    signInWithGoogle();
  };

  const resetPassword = async () => {
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Sent email");
    } else {
      toast("please enter your email address");
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleLogIn} action="" className="form-container bg-dark">
        <h2 className="fw-bold h4 text-white text-center my-3">Please Login</h2>
        <div className="input-group">
          <input
            onBlur={handleEmailInput}
            id="email"
            type="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="input-group">
          <input
            onBlur={handlePasswordInput}
            id="password"
            type="password"
            placeholder="Password"
            required
          />
        </div>
        <p className="text-danger small">{error?.message}</p>
        <button
          type="submit"
          className="btn btn-primary fw-bold text-uppercase"
        >
          log in
        </button>
        <div className="mt-3b text-muted small text-center">
          are youn new ?{" "}
          <Link to="/signup" className="btn btn-link text-primary small">
            please sign up
          </Link>
          <div className="text-muted">
            Forget Password?
            <button
              type="button"
              className="btn btn-link text-primary pe-auto text-decoration-none"
              onClick={resetPassword}
            >
              Reset Password
            </button>
          </div>
          <button
            onClick={() => handleSignInGoogle()}
            className="btn btn-warning fw-bold text-white text-uppercase"
          >
            Sign in with Google
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};
export default Login;
