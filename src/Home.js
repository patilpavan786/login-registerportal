import React from 'react'
import home from "./Home.module.css"
import Header from './Component/Header';


function Home() {
  return (
   <div className={home.main}>
<Header />
{/* <img style={{height:"100%", width:"100%"}}src='https://www.pushengage.com/wp-content/uploads/2022/02/Best-Website-Welcome-Message-Examples.png'/> */}
<footer>
 <h3 style={{marginTop:"95vh"}}> CopyRight 	&#169;By Group-3 , FRONTEND CALIFORNIUM.</h3>
</footer>
   
   </div>
  )
}

export default Home;
