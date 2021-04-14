import { Button } from '@material-ui/core';
import React from 'react';
import "./SearchPage.css";
import SearchResult from "./SearchResult";

const SearchPage = () => {
    return (
        <div className = "searchPage">
            <div className = "searchPage-info">
                <p><strong>2 stays · 12 april  to 18 april · 2 guest</strong></p>
                <h1>Stays nearby</h1>
                <Button variant = "outlined">Cancellation Flexibility</Button>
                <Button variant = "outlined">Type of place</Button>
                <Button variant = "outlined">Price</Button>
                <Button variant = "outlined">Rooms and beds</Button>
                <Button variant = "outlined">More Filters</Button>
            </div>
            <SearchResult img = "https://a0.muscache.com/im/pictures/82cd6244-eadd-4180-88ba-051aa1667d50.jpg?im_w=1200" location = "Manali, Himachal Pradesh, India" description ="2 guests · 1 bedroom · 1 bed · 1 private bathroom" title = "Elegant Room Amidst Apple Orchard with Balcony 1" star = "4.67" price = "₹964/ night" total = "₹5784" />
            <SearchResult img = "https://a0.muscache.com/im/pictures/64d92302-2f53-423c-8234-e119c85e9922.jpg?im_w=1200" location = "Manali, Himachal Pradesh, India" description ="3 guests · 1 bedroom · 2 beds · 1 bathroom" title = "Mountain & Snow Paradise in Aleo, Manali" star = "4.53" price = "₹750/ night" total = "3489" />
            <SearchResult img = "https://a0.muscache.com/im/pictures/9ed7b9e6-176d-4b8f-9a67-1cc29e543ebf.jpg?im_w=720" location = "Hamta Village, Prini, Manali, Himachal Pradesh, India" description ="2 guests · 1 bedroom · 1 bed · 2 bathrooms" title = "GlampEco Stays Manali, Rustic home with epic view" star = "4.87" price = "₹2799/ night" total = "₹8784" />
            <SearchResult img = "https://a0.muscache.com/im/pictures/2198da84-d07b-4e6b-bb88-5b1ee54f5184.jpg?im_w=1200" location = "Manali, Himachal Pradesh, India" description ="3 guests · 1 bedroom · 1 bed · 1 private bathroom" title = "Wooded Bliss Manali | Single Room | Workation" star = "5.0" price = "1800/ night" total = "₹7856" />
            <SearchResult img = "https://a0.muscache.com/im/pictures/924065ba-ae29-4244-ad13-3bcaa68cf1bf.jpg?im_w=1200" location = "Manali, Himachal Pradesh, India" description ="2 guests · 1 bedroom · 1 bed · 1 private bathroom" title = "Iris Stays" star = "4.91" price = "₹1300/ night" total = "₹4584" />
            <SearchResult img = "https://a0.muscache.com/im/pictures/eadbddfd-7d58-4595-a74f-411271812f7a.jpg?im_w=1200" location = "Manali, Himachal Pradesh, India" description ="2 guests · 1 bedroom · 1 bed · 4 shared bathrooms" title = "Snow peaks from comfort of your bed| Near Hadimba" star = "5.0" price = "₹1,313/ night" total = "₹3684" />
            <SearchResult img = "https://a0.muscache.com/im/pictures/48cf8855-3463-48fb-996b-26f77fb8d8c9.jpg?im_w=720" location = "Manali, Himachal Pradesh, India" description ="1 guest · 1 bedroom · 5 beds · 2 shared bathrooms" title = "Apple Farm Homestay" star = "4.67" price = "₹1301/ night" total = "₹8706" />
        </div>
    );
};

export default SearchPage;