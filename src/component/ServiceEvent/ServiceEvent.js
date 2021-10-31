import React from 'react';
import Events from '../Events/Events';

const ServiceEvent = () => {
    return (
        <div className="px-4 mb-5">
            <h1 className="text-center text-4xl font-bold pt-5">OUR ALL EVENTS</h1>
            <Events />
            <h1 className="text-3xl font-semibold text-center">Our Next Destination</h1>
            <div className="grid grid-cols-none sm:grid-cols-2 lg:grid-cols-3 gap-2 px-4 pt-5">
                {/* <img src="https://i.ibb.co/z8xF2Vh/lake-gd44c9c2af-640.jpg" alt="" /> */}
                <img src="https://i.ibb.co/mJc1KxY/lake-gee3106e97-640.jpg" alt="" />
                <img src="https://i.ibb.co/HGsRJ8w/bird-g789cce194-640.jpg" alt="" />
                <img src="https://i.ibb.co/RyPBXwh/pumpkin-g4c26db098-640.jpg" alt="" />
                <img src="https://i.ibb.co/VHf9PtK/redwood-national-park-g935723a47-640.jpg" alt="" />
                <img src="https://i.ibb.co/YjxgxBX/forest-gaf3c0c76d-640.jpg" alt="" />
                <img src="https://i.ibb.co/bWbZxXM/trees-g94fa65857-640.jpg" alt="" />
            </div>
        </div>
    );
};

export default ServiceEvent;