import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="grid md:grid-cols-2 px-4">
            <div className="p-5">
                <img src="https://i.ibb.co/XWC0jWp/Toure.webp" alt="" />
            </div>
            <div className="px-5 pt-5">
                <Link to="/about" className="text-sm  text-blue-500">About Us</Link>
                <h1 className=" text-3xl md:text-4xl font-medium mb-2 leading-relaxed ">Get ready for real time <br /> adventure</h1>
                <p className="leading-loose">Let’s start your journey with us, your dream will come true.Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation</p>
                <button className="px-5 mt-5 md:py-4 text-white font-medium py-2 rounded mt-2  bg-yellow-400">Booking Your Destination</button>
            </div>
        </div>
    );
};

export default About;