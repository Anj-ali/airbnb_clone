import React from 'react';
import './Header.css';
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMore from "@material-ui/icons/ExpandMore";
import {Avatar} from "@material-ui/core";

const Header = () => {
    return (
        <div className="header">
            <img className = "header_icon" src = "https://1000logos.net/wp-content/uploads/2017/08/Airbnb-logo.jpg" alt="logo"/>
            <div className = "header_center">
                <input type = "text"/>
                <SearchIcon/>
            </div>

            <div className = "header_center">
                <p>Become a Host</p>
                <LanguageIcon/>
                <ExpandMore/>
                <Avatar/>
            </div>
        </div>
    );
};

export default Header;