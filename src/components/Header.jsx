import React from "react";
import AppLogo from "../utils/constant";
import {useState  , useEffect} from "react";


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
                <img src={AppLogo} alt='logo' />
            </div>
            <div className='header-nav-items'>
                <ul>
                    <li>Home</li>
                    <li>Contact Us</li>
                    <li>About Us</li>
                    <li>Cart</li>
                    <button className='login_btn' onClick={inOutBtnHandler}>{inOutBtn}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;