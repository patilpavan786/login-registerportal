import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import header from "./Header.module.css";
import { GiHamburgerMenu } from "react-icons/gi";

function Header() {
  const [image, setImage] = useState(null)
  const [toggle, setToggle] = useState(false);
  const [file, setFile] = useState(null);
    const [showInput, setShowInput] = useState(false);


    const handleFileSelect = (event) => {
        setFile(event.target.files[0]);
        setShowInput(false);

    }
    const toggleNavbar = () => {
      setToggle(!toggle);
    };
    const onImageChange = (event) => {
      if (event.target.files[0] ) {
        console.log(event.target.files[0])
        setImage(URL.createObjectURL(event.target.files[0]));
      }
     }
  
    return (
      <div className={header.navbar}>
      <NavLink to='/' ><h1  className={header.log}>Nav</h1></NavLink>
        <nav className={toggle ? header.toggleNavbar : ""}>
        <NavLink className={header.link} to="/">Home</NavLink>
         <NavLink className={header.link} to="/AboutUs">About us</NavLink>
         <NavLink className={header.link} to="/Login">Log In</NavLink>
           <NavLink className={header.link} to="/Register">Register</NavLink>
          
           {/* <input type="file" onChange={onImageChange} className="filetype" /> */}
           {file ? (
                            <img style={{ borderRadius: '50px', cursor: 'pointer' }} src={URL.createObjectURL(file)} height="40" width="40" alt="Profile" onClick={() => setShowInput(!showInput)} />
                        ) : (
                            <img style={{ borderRadius: '50px', cursor: 'pointer' }} src="https://media.istockphoto.com/id/1332100919/vector/man-icon-black-icon-person-symbol.jpg?s=612x612&w=0&k=20&c=AVVJkvxQQCuBhawHrUhDRTCeNQ3Jgt0K1tXjJsFy1eg=" height="40" width="40" alt="Profile" onClick={() => setShowInput(!showInput)} />
                        )}

                        {showInput && (
                            <input style={{ display: 'flex', justifyContent: 'center', margin: '4px 0px 0px 7px', padding: '0px', height: '40px', width: '400px' }} type="file" accept="image/jpeg, image/jpg, image/png" onChange={handleFileSelect} />)}
        
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
