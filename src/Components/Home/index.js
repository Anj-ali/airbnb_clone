import React from 'react';
import './Home.css';
import Banner from './Banner';

const Home = () => {
    return (
        <div className = "home">
            <h1>This is home components</h1>
            <Banner/>
        </div>
    );
};

export default Home;