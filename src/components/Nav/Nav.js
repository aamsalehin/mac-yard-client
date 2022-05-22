import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./Nav.css";
const Nav = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const logOut = () => {
    signOut(auth);
    navigate("/login");
  };

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          {!user ? (
            <li>
              <Link to="/login">login</Link> <Link to="/signup">sign-up</Link>
            </li>
          ) : (
            <button onClick={logOut} className="btn btn-primary text-white">
              Sign Out
            </button>
          )}
        </ul>
      </nav>
    </div>
    // end nav
  );
};

export default Nav;
