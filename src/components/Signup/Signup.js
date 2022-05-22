import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle
} from "react-firebase-hooks/auth";
import "./Signup.css";
import Spinnerr from "../Spinner/Spinner";
//email verification
import { useSendEmailVerification } from "react-firebase-hooks/auth";
import axios from "axios";

const Signup = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error
  ] = useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle, userG] = useSignInWithGoogle(auth);
  const navigate = useNavigate(); //email verification;

  const [sendEmailVerification] = useSendEmailVerification(auth);
  const handleEmailInput = e => {
    setEmail(e.target.value);
  };
  const handlePasswordInput = e => {
    setPassword(e.target.value);
  };
  const handleConfirmPasswordInput = e => {
    setConfirmPassword(e.target.value);
  };
  //   const handleError = () => {
  //     setError(error);
  //   };
  const handleCreateUser = async e => {
    e.preventDefault();

    if (password.length < 6) {
      setErrorMsg("password length must be greater than 6");
      return;
    }
    if (password !== confirmPassword) {
      setErrorMsg("Password didn't match");
      return;
    }
    await createUserWithEmailAndPassword(email, password);
    const { data } = await axios.post(
      "https://still-gorge-64636.herokuapp.com/login",
      {
        email
      }
    );
    localStorage.setItem("accessToken", data.accessToken);
    // navigate(from, { replace: true });
  };

  if (user) {
    sendEmailVerification(email);
    navigate("/");
  }
  if (loading) {
    return <Spinnerr></Spinnerr>;
  }

  const handleSignInGoogle = () => {
    signInWithGoogle();
  };
  if (userG) {
    navigate("/");
  }

  return (
    <div className="container">
      <form onSubmit={handleCreateUser} className="form-container bg-dark">
        <h2 className="fw-bold h4 text-white text-center my-3">
          Please Sign Up
        </h2>
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
        <div className="input-group">
          <input
            onBlur={handleConfirmPasswordInput}
            id="confirm-password"
            type="password"
            placeholder="confirm Password"
            required
          />
        </div>
        <p className="text-danger small">{errorMsg}</p>
        <p className="text-danger small">{error?.message}</p>
        <button
          type="submit"
          className="btn btn-primary fw-bold text-uppercase"
        >
          Sign Up
        </button>

        <p className="mt-3 small text-center text-muted">
          Already have an account?{" "}
          <Link to="/login" className="btn btn-link text-primary small">
            Login please!
          </Link>
        </p>
        <button
          onClick={() => handleSignInGoogle()}
          type="button"
          className="btn btn-warning fw-bold text-white text-uppercase"
        >
          Sign up with Google
        </button>
      </form>
    </div>
  );
};
export default Signup;
