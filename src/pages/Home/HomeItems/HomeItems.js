import React from 'react';
import About from '../../About/About';
import Banner from '../Banner/Banner';
import FaqPage from '../FaqPage/FaqPage';
import ServicesDemo from '../ServicesDemo/ServicesDemo';

const HomeItems = () => {

    return (
        <div>
            <Banner></Banner>
            <About></About>
            <ServicesDemo></ServicesDemo>
            <FaqPage></FaqPage>
        </div>
    );
};

export default HomeItems;