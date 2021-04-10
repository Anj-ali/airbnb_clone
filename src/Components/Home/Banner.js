import { Button } from '@material-ui/core';
import React, {useState} from 'react';
import Search from "./Search"
import "./Banner.css";

const Banner = () => {
    const [showSearch, setShowSearch] = useState(false);
    return (
        <div className='banner'>
            {showSearch &&  <Search/>}
            <div className="banner-search">
                <Button onClick = {() =>{
                    setShowSearch(!showSearch)
                }} className = "banner-searchButton" variant='outlined'>{showSearch ? "Hide":"Search Dates"}</Button>
            </div>
            <div className = "banner-info">
                <h1>Get out and strech your imagination</h1>
                <h5>Plan a different kind of gateway to uncover the hidden gems near you.</h5>
                <Button variant = "outlined">Explore Nearby</Button>
            </div>
        </div>
    );
};
 
export default Banner;