import React from 'react';
import About from '../../About/About';
import Banner from '../Banner/Banner';
import ServicesDemo from '../ServicesDemo/ServicesDemo';

const HomeItems = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <ServicesDemo></ServicesDemo>
        </div>
    );
};

export default HomeItems;