import React from 'react';
import Events from '../Events/Events';
import About from './About';
import Banner from './Banner';
import FeaturedBlog from './FeaturedBlog';
import TravelService from './TravelService';


const Home = () => {
    return (
        <div>
            <Banner />
            <h6 className="text-center pt-5 text-blue-500 ">Check Our Best Tour</h6>
            <h1 className="text-center text-4xl font-bold">NEW EVENTS</h1>
            <Events />
            <FeaturedBlog />
            <About />
            <TravelService />
        </div>
    );
};

export default Home;