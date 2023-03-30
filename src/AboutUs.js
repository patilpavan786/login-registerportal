import React from 'react'
import Header from './Component/Header'
import about from "./AboutUs.module.css";

function AboutUs() {
  return (
    <div className={about.main} >
   <Header />
   <div>
   
   {/* <img className={about.imgaboutus} src="https://functionup.org/wp-content/uploads/2021/09/cropped-light-1-1536x513.png"/> */}
 <div className={about.text}>
   <h4 style={{marginTop:"80vh", marginBottom:"10px", fontSize:"25px",fontFamily:"cursive" ,color:"whitesmoke"}}>About Us</h4>

  <p style={{fontSize:"15px" ,fontFamily:"sans-serif", marginBottom:"35px" , color:"white", lineHeight:"25px"}}>This project is based on login form and registration form ,and our website is fully responsive,we can acess that website in mobile view and pc .  In that we handled the edge cases while filling the form 
     there are following :-
     a form for entering authentication credentials to access the restricted page is referred to as a Login form. A login form contains only two fields, i.e., username and password. Each user should have a unique username that can be an email, phone number, or any custom username
 </p>
 </div>
   </div>
   <footer>
 <h4> CopyRight 	&#169;By Group-3 , FRONTEND CALIFORNIUM.</h4>
</footer>
    </div>
  )
}

export default AboutUs
