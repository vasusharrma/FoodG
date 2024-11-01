import React from "react";
import AppLogo from "../utils/constant";
import {useState  , useEffect} from "react";
import {Link} from "react-router-dom";


const Header = () => {

   const [inOutBtn , setInOutBtn] = useState("Login");

   console.log("Header Rendered");

   useEffect(() => {
       console.log("useEffect called");
   } , [inOutBtn]);


   const inOutBtnHandler = () => {
       inOutBtn === "Login"? setInOutBtn("Logout"):setInOutBtn("Login");
   }

    return (
        <div className='header'>
                <div className='header-logo'>
                    <img src={AppLogo} alt='logo'/>
                </div>

            <div className='header-nav-items'>
                <ul>
                    <li><Link className='header-link' to='/'>Home</Link></li>
                    <li><Link className='header-link' to='/contact'>Contact Us</Link></li>
                    <li><Link className='header-link' to='/about'>About Us</Link></li>
                    <li><Link  className='header-link' to='/cart'>Cart</Link></li>
                    <button className='login_btn' onClick={inOutBtnHandler}>{inOutBtn}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;