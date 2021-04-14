import React from 'react';
import './Home.css';
import Banner from './Banner';
import Card  from './Card';

const Home = () => {
    return (
        <div className = "home">
            <Banner/>
            
            <div className="home-section">
                <Card
                    src = "https://a0.muscache.com/im/pictures/a6b08861-feb8-4a01-a76d-b33d2867b441.jpg?im_w=480"
                    title = "Online Experiences"
                    description = "Unique activities we can do together, led by a world of hosts."
                 />
                <Card src = "https://a0.muscache.com/im/pictures/36f53e61-db8d-403c-9122-5b761c0e4264.jpg?im_w=480"
                    title = "Unique stays"
                    description = "Spaces that are more than just a place to sleep."
                />
                <Card src = "https://a0.muscache.com/im/pictures/7f254627-3922-4880-b8fa-545b8551117e.jpg?im_w=480"
                    title = "Farms and nature"
                    description = "Comfortable private places, with room for friends or family with nature."
                />
                <Card src = "https://a0.muscache.com/im/pictures/10a638e1-6aff-4313-8033-1275cec83987.jpg?im_w=480"
                    title = "Pets allowed"
                    description = "We belive they are family too"
                />
            </div>
            <div className="home-section">
                <Card src ="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
                    title = "3 Bedroom Flat in Manali"
                    description = "Superhost with a stunning view of the beachside in Sunny Bournemouth"
                    price = "5789₹/night"
                />
                <Card src ="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
                    title = "Penthouse in Ladakh"
                    description = "Enjoy the amazing sights of London with this stunning penthouse"
                    price = "29553₹/night"
                />
                <Card src ="https://media.nomadicmatt.com/2018/apartment.jpg"
                    title = "1 Bedroom apartment"
                    description = "Superhost with great amenities and a fabolous shopping"
                    price = "999₹/night"
                />
            </div>
        </div>
    );
};

export default Home;