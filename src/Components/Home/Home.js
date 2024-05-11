import React from 'react';
import AboutUs from './About Us/AboutUs';
import Services from './Services/Services';
import Banner from './Banner/Banner';
import AskedQuestion from './AskedQuestion/AskedQuestion';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Services></Services>
            <AskedQuestion></AskedQuestion>
        </div>
    );
};

export default Home;