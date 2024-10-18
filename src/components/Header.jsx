import React from "react";
import AppLogo from "../utils/constant";
const Header = () => {
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
                </ul>
            </div>
        </div>
    )
}

export default Header;