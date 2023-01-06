import React from 'react'
import Header from './Component/Header'
import reg from "./Register.module.css"
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";


function Register() {

  let initialValues;
  if (localStorage.getItem("user") === null) {
    initialValues = [];
  } else {
    initialValues = JSON.parse(localStorage.getItem("user"));
  }
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [userData, setUserData] = useState(initialValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    addingUser(email, username, password);
  };

  const addingUser = (email, username, password) => {
    const newUser = {
      email: email,
      username: username,
      password: password,
    };
    setUserData([...userData, newUser]);
    localStorage.setItem("user", JSON.stringify(userData));
    console.log(userData);
  };
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(userData));
    // eslint-disable-next-line
  }, [userData]);


  return (
    <div className={reg.main} >
    <Header />
    <div className={reg.container}>
      {/* {Object.keys(formErrors).length === 0 && isSubmit ? (
      <div className={reg.sucess}>Signed in successfully</div>
      ) : (
        null
      )} */}

      <form className={reg.form} onSubmit={handleSubmit}>
      <img className={reg.img} src="https://image.shutterstock.com/image-vector/user-icon-260nw-523867123.jpg" />
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
          <br/><br/>
            
       <div className={reg.input1}></div> 
       <i class="fa fa-solid fa-user"></i>
       <input
      //  required
      //  pattern="/\s/g"
              type="text"
              className={reg.input}
              name="username"
              placeholder="Username"
              value={username}
              onChange={(e)=> setUsername(e.target.value)}
            />
          </div>
        
          <div className="field">
            
       <div className={reg.input2}></div>
       <i class="fa fa-regular fa-envelope"></i>
       <input
       required
        pattern="[^ @]*@[^ @]*"
            className={reg.input}
              type="text"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
            />
          </div>
          
          <div className="field">
           
         <div className={reg.input3}> </div>
         <i class="fa fa-solid fa-lock"></i>
          <input
          required
           minLength={5}
           maxLength={15}
            className={reg.input}
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
            />
          </div>
          
          <button className="fluid ui button blue">Register</button>
        </div>
      
      </form>
      <br/>
      <h5 style={{color:"black"}}>Already have an account    <NavLink style={{color:"blue"}}to="/Login">Log In</NavLink></h5>
    </div>
    
    </div>
    
  );
    };
export default Register