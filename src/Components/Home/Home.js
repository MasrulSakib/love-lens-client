import React from 'react';
import AboutUs from './About Us/AboutUs';
import Services from './Services/Services';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Services></Services>
        </div>
    );
};

export default Home;