import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../Hooks/useAuth';

const Book = () => {
    const { user } = useAuth()
    const { id } = useParams();
    const [details, setDetails] = useState([])
    const [detail, setDetail] = useState({});
    const [addressData, setAddressData] = useState({});

    const handelOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...addressData };
        newLoginData[field] = value;
        console.log(newLoginData);
        setAddressData(newLoginData);
    }

    useEffect(() => {
        fetch('https://ghoulish-wizard-13656.herokuapp.com/events')
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])

    useEffect(() => {
        const foundDetails = details.find(detail => detail._id === id)
        setDetail(foundDetails)
    }, [id, details])

    const handelBooking = e => {

        fetch('https://ghoulish-wizard-13656.herokuapp.com/booking', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    alert('Booking successfull')
                }
            })

        e.preventDefault()
    }
    // send to server
    const bookingData = {
        id: detail?._id,
        name: detail?.name,
        img: detail?.img,
        price: detail?.price,
        detlils: detail?.detlils,
        address: addressData.address,
        country: addressData.country,
    }
    console.log(detail);
    return (
        <>
            <h1 className="py-4 bg-red-200  text-center text-2xl text-black font-medium"> Book Now {detail?.name}</h1>
            <div className="">
                <div className="py-4 px-2">
                    <div className="shadow-lg group container  rounded-md bg-white  max-w-sm flex justify-center items-center  mx-auto content-div">
                        <div>
                            <img style={{ 'height': "250px" }} src={detail?.img} alt="" />
                            <div className="py-8 px-4 bg-white  rounded-b-md fd-cl">
                                <div className="justify-between">
                                    <span className="text-lg font-bold">{detail?.name}</span>
                                    <span className="text-blue-400 float-right text-lg font-bold">$<span>{detail?.price}</span> </span>
                                </div>
                                <div className="mt-5">
                                    <span className="bg-blue-50 font-medium text-blue-300 px-2 rounded mt-5">12 Jun-18 Jun</span>
                                    <span className="text-blue-500 pl-3 font-medium">5 Days</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <form onSubmit={handelBooking} className=" px-4 md:w-2/3 mx-auto py-5 ">
                    <div className=" bg-white shadow rounded-lg p-6">
                        <div className="grid  gap-6">
                            <div className="grid grid-cols-2 gap-2">
                                <div className="  border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
                                    <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
                                        <p>
                                            <label for="name" className="bg-white text-gray-600 px-1">Name *</label>
                                        </p>
                                    </div>
                                    <p>
                                        <input id="name" autocomplete="false" value={user?.displayName} type="text" className="py-1 px-1 text-gray-900 outline-none block h-full w-full" required />
                                    </p>
                                </div>
                                <div className="  border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
                                    <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
                                        <p>
                                            <label for="email" className="bg-white text-gray-600 px-1">Email *</label>
                                        </p>
                                    </div>
                                    <p>
                                        <input id="email" autocomplete="false" type="email" value={user.email} className="py-1 px-1 text-gray-900 outline-none block h-full w-full" required />
                                    </p>
                                </div>
                            </div>

                            <div className="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
                                <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
                                    <p>
                                        <label for="country" className="bg-white text-gray-600 px-1">Country *</label>
                                    </p>
                                </div>
                                <p>
                                    <input onBlur={handelOnChange} name='country' id="country" autocomplete="false" type="text" className="py-1 px-1 text-gray-900 outline-none block h-full w-full" required />
                                </p>
                            </div>
                            <div className="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
                                <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
                                    <p>
                                        <label for="adders" className="bg-white text-gray-600 px-1">Adders *</label>
                                    </p>
                                </div>
                                <p>
                                    <textarea onBlur={handelOnChange} id="adders" name='address' autocomplete="false" type="text" className="py-1 px-1 outline-none block h-full w-full" required />
                                </p>
                            </div>
                        </div>
                        <div className="border-t mt-6 pt-3">
                            <button type="submit" className="rounded text-gray-100 px-3 py-1 bg-blue-500 hover:shadow-inner hover:bg-blue-700 transition-all duration-300">
                                Place Booking
                            </button>
                        </div>
                    </div>
                </form>

            </div>
        </>
    );
};

export default Book;