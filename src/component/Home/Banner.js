import React from 'react';

const Banner = () => {

    return (
        <div className="flex items-center justify-center min-h-screen " style={{ "background-image": "url(https://i.ibb.co/VQ3tcYJ/banner-1.png)", "backgroundSize": "cover", " background-repeat": "no-repeat" }} >
            <div className="">
                <h1 className="text-6xl pt-5  text-blue-500  text-center font-semibold">Lifelong memories just a <br /><span> few seconds away </span></h1>
                <h6 className="text-center text-md  py-2 text-white mt-3">Let's start your journey with us , Your dream will come true</h6>
                <div className=" flex justify-center ">
                    <button className="bg-yellow-500 p-3 mt-10">Explore Destination</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;