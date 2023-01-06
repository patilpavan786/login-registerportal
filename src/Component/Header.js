import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import header from "./Header.module.css";
import { GiHamburgerMenu } from "react-icons/gi";

function Header() {
  
const [toggle, setToggle] = useState(false);
    const toggleNavbar = () => {
      setToggle(!toggle);
    };
  
    return (
      <div className={header.navbar}>
       <h1  className={header.log}>Nav</h1>
        <nav className={toggle ? header.toggleNavbar : ""}>
        <NavLink className={header.link} to="/">Home</NavLink>
         <NavLink className={header.link} to="/AboutUs">About us</NavLink>
         <NavLink className={header.link} to="/Login">Log In</NavLink>
           <NavLink className={header.link} to="/Register">Register</NavLink>
         
        
          <div className={header.btn}>
            <button className={header.btnClose} onClick={toggleNavbar}>
              <i className="close">X</i>
            </button>
          </div>
        </nav>
        <div className={header.btn}>
          <button className={header.btnMenu} onClick={toggleNavbar}>
   
            <GiHamburgerMenu />
          </button>
        
        </div>
      </div>
    ); 


















//     const[toggle,setToggle]=useState(false);
//     function Click() {
//         setToggle(!toggle)
//     }
//   return (
//     <header>
//       <div className="mainnav">
//         <div className="logo">
//           <span>P</span>
//         </div>
//         <div className="navbar">
//           <nav className={toggle ? "toggleNav": ""}>
//             <NavLink to="/">Home</NavLink>
//             <NavLink to="/AboutUs">About us</NavLink>
//             <NavLink to="/Login">Log In</NavLink>
//             <NavLink to="/Register">Register</NavLink>
//           </nav>
//         </div>
//       </div>
//       <div  className="menu">
//           <a onClick={Click} href="#">
//             <GiHamburgerMenu />
//           </a>
//         </div>
//     </header>
//   );
}

export default Header;
