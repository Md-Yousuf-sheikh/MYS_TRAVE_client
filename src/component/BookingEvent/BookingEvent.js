import React, { useEffect, useState } from 'react';

const BookingEvent = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('https://ghoulish-wizard-13656.herokuapp.com/booking')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [items])
    return (
        <div>
            <div className="py-5 px-4">
                <div className="grid sm:grid-cols-2 gap-3 py-7 lg:grid-cols-3 xl:grid-cols-4 pt-3">
                    {
                        items.map(item => <div class="shadow-lg group container  rounded-md bg-white  max-w-sm flex justify-center items-center  mx-auto content-div">
                            <div>
                                <img style={{ 'height': "250px" }} src={item.img} alt="" />

                                <div class="py-8 px-4 bg-white  rounded-b-md fd-cl">
                                    <div className="justify-between">
                                        <span className="text-lg font-bold">{item.name}</span>
                                        <span className="text-blue-400 float-right text-lg font-bold">$<span>{item.price}</span> </span>
                                    </div>
                                    <div className="mt-5">
                                        <span className="bg-blue-50 font-medium text-blue-300 px-2 rounded mt-5">12 Jun-18 Jun</span>
                                        <span className="text-blue-500 pl-3 font-medium">5 Days</span>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>

    );
};

export default BookingEvent;