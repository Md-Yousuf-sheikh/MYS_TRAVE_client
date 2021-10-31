import React from 'react';

const Event = (props) => {
    const { name, img, price } = props.item;

    return (
        <div>
            <div class="py-4 px-2">
                <div class="shadow-lg group container  rounded-md bg-white  max-w-sm flex justify-center items-center  mx-auto content-div">
                    <div>
                        <img style={{ 'height': "250px" }} src={img} alt="" />

                        <div class="py-8 px-4 bg-white  rounded-b-md fd-cl group-hover:opacity-25">
                            <div className="justify-between">
                                <span className="text-lg font-bold">{name}</span>
                                <span className="text-blue-400 float-right text-lg font-bold">$<span>{price}</span> </span>
                            </div>
                            <div className="mt-5">
                                <span className="bg-blue-50 font-medium text-blue-300 px-2 rounded mt-5">12 Jun-18 Jun</span>
                                <span className="text-blue-500 pl-3 font-medium">5 Days</span>
                            </div>
                        </div>
                    </div>

                    <div class="absolute opacity-0 fd-sh group-hover:opacity-100">
                        <div class="pt-8 text-center">
                            <button class="text-center rounded-lg p-3 text-white bg-yellow-400 font-bold text-lg">Booking Now</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Event;