import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [pass1, setPass1] = useState("");
  const navigate = useNavigate();
  const firebaseConfig = {
    apiKey: "AIzaSyCFRWPIQ0WYGTLFJOfLlYJZWb16vaWhmhQ",
    authDomain: "auth-784a5.firebaseapp.com",
    projectId: "auth-784a5",
    storageBucket: "auth-784a5.firebasestorage.app",
    messagingSenderId: "367817918317",
    appId: "1:367817918317:web:80968c1f2ef516f8e03c64",
    measurementId: "G-JGNY9X5LFW",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(); //email / password authontion

  const loginData = (e) => {
    e.preventDefault();

    let obj = {
      email: email,
      password: pass1,
    };
    signInWithEmailAndPassword(auth, obj.email, obj.password)
      .then(() => {
        alert("Login succefully....");
        navigate("/list");
      })
      .catch((err) => {
        alert("Getting Error");
      });
  };
  return (
    <div className="container">
      <div className="card">
        <div className="card-titles">
          <h2 className="text-center">Login page</h2>
        </div>
        <div className="card-body">
          <form onSubmit={loginData}>
            <div class="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>

            <div class="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                value={pass1}
                onChange={(e) => setPass1(e.target.value)}
                type="password"
                className="form-control"
                aria-describedby="emailHelp"
                id="exampleInputPassword1"
              />
            </div>
            <button type="submit" className="btn-btn-primary">
              Login
            </button>
          </form>
        </div>
      </div>
      <h4>
        If you don't have a account<Link to="/"> Register</Link>
      </h4>
    </div>
  );
}

export default Login;
