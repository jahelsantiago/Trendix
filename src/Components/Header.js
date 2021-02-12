import React from 'react'
import Logo from "../images/logo.svg"
import "./Header.css"

const Header = () => {
    return (
        <div className = "header__wrapper">
            {/*logo*/ }
            <div className="header__logo">
                <img src={Logo} alt="" width = "25"/>
            </div>            
            {/*search bar*/ }
            <div className="header__search">
                <input placeholder = "Search" type="text"/>
            </div>
            {/*menu items*/ }
            <div className="header__menuItems">
                <a href="#">Free Stocks</a>
                <a href="#">Portfolio</a>
                <a href="#">Cash</a>
                <a href="#">Messages</a>
                <a href="#">Account</a>
            </div>
        </div>
    )
}

export default Header;