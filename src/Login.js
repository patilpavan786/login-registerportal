import React from 'react'
import Header from './Component/Header'
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import log from "./Login.module.css"

function Login() {
  const[news,setNews]=useState([])
  const[alert,setAlert]=useState("")

useEffect(()=>{

  if (localStorage.getItem("user")) {
    const data = JSON.parse(localStorage.getItem("user"))
    console.log(data)
    setNews(data)
  }
},[])
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {

    e.preventDefault();
    let getNewData=news.filter(e=>e.username===(username) && e.password===(password))
    addingUser( username, password);
    console.log(getNewData)
  };

  const addingUser = ( username, password) => {
    const newUser = {
      username: username,
      password: password,
    };
   
  };
  

  // function LogIn(){
  //     console.log(news)
  //     let getNewData=news.filter(e=>e.username.includes(username) && e.password.includes(password))
  //     console.log(getNewData)
  //    // alert(`You Are LoggedIn ${getNewData[0].email}`)
      
  // }
   
  return (
    <div className={log.main} >
    <Header />
    {/* <h3 style={{fontFamily:"sans-serif", color:"white", marginTop:"10px",marginLeft:"10%"}}>{`Welcome ${alert}`}</h3> */}
    <div className={log.container}>
      
      <form className={log.form} onSubmit={handleSubmit}>
      <img className={log.img} src="https://images-cdn.ubuy.co.in/633b95cda514923dcc7d8e99-star-wars-the-mandalorian-11-the-child.jpg" />
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <br/><br/>
       <div className={log.input1}></div> 
       <i class="fa fa-solid fa-user"></i>
       <input
       required
              type="text"
              className={log.input}
              name="username"
              placeholder="Username"
              value={username}
              onChange={(e)=> setUsername(e.target.value)}
            />
          </div>
        
         
            
       
          
          <div className="field">
           
         <div className={log.input3}> </div>
         <i class="fa fa-solid fa-lock"></i>
          <input
          required
            className={log.input}
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
            />
          </div>
          {/* onClick={LogIn} */}
          <button className="fluid ui button blue">LogIn</button>
        </div>
      
      </form><br/>
      <h5 >don't have an account?   <NavLink style={{color:"blue"}}to="/Register">Register</NavLink></h5>
    </div>
    <footer>
 <h4> CopyRight 	&#169;By Group-3 , FRONTEND CALIFORNIUM.</h4>
</footer>
    </div>
  );
}
export default Login
