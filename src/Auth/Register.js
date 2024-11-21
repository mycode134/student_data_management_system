import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";


function Register() {
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[pass1,setPass1]=useState("")
    const[pass2,setPass2]=useState("")

    const navigate=useNavigate()

    const firebaseConfig = {
      apiKey: "AIzaSyCFRWPIQ0WYGTLFJOfLlYJZWb16vaWhmhQ",
      authDomain: "auth-784a5.firebaseapp.com",
      projectId: "auth-784a5",
      storageBucket: "auth-784a5.firebasestorage.app",
      messagingSenderId: "367817918317",
      appId: "1:367817918317:web:80968c1f2ef516f8e03c64",
      measurementId: "G-JGNY9X5LFW"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const auth=getAuth() //email / password authontion


    const registerData=(e)=>{
      e.preventDefault()

      let obj={
        email:email,
        password:pass1
      }
      createUserWithEmailAndPassword(auth,obj.email,obj.password)
      .then(()=>{
        alert("Registered succefully....")
        navigate("/login")
      }).catch((err)=>{
        alert("Getting Error")
      })

    }

  return (
    <div className="container">
      <div className="card">
        <div className="card-titles">
          <h2 className="text-center"> Registertion page</h2>
        </div>
        <div className="card-body">
          <form onSubmit={registerData}> 
            <div class="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e)=>{setName(e.target.value)}}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}}
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
                type="password"
                value={pass1}
                onChange={(e)=>{setPass1(e.target.value)}}
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>

            <div class="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Conform Password
              </label>
              <input
                type="password"
                value={pass2}
                onChange={(e)=>{setPass2(e.target.value)}}
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>

            <button type="submit" className="btn-btn-primary">
              Register
            </button>
          </form>
        </div>
      </div>
      <h4>If you have  already account <Link to="/login" >Login</Link></h4>
    </div>
  );
}


export default Register;