import React, { useRef, useState } from 'react';

const EventAdd = () => {
    const [added, setAdded] = useState(false);
    const nameRef = useRef();
    const priceRef = useRef();
    const imgRef = useRef();
    const detlilsRef = useRef();


    const handelSubmit = (e) => {
        const name = nameRef.current.value;
        const price = priceRef.current.value;
        const img = imgRef.current.value;
        const detlils = detlilsRef.current.value;

        const newUser = {
            name: name,
            price: price,
            img: img,
            detlils: detlils
        }
        fetch('https://ghoulish-wizard-13656.herokuapp.com/events', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setAdded(true)
                    e.target.reset()
                } else {
                    setAdded(false)
                }
            })

        e.preventDefault();
    }

    return (
        <div className="">
            <h1 className="text-4xl text-center font-medium bg-red-400 text-white ">ADD NEW EVENT</h1>

            <div className="bg-blue-300">
                <form onSubmit={handelSubmit} className=" px-4 md:w-2/3 mx-auto py-5 ">
                    {
                        added && <div
                            className="bg-green-200 px-6 py-4  my-4 rounded-md text-lg flex items-center mx-auto w-3/4 xl:w-2/4"
                        >
                            <svg
                                viewBox="0 0 24 24"
                                className="text-green-600 w-5 h-5 sm:w-5 sm:h-5 mr-3"
                            >
                                <path
                                    fill="currentColor"
                                    d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
                                ></path>
                            </svg>
                            <span className="text-green-800"> Added New Event Successfully! </span>
                        </div>
                    }
                    <div className=" bg-white shadow rounded-lg p-6">
                        <div className="grid  gap-6">
                            <div className="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
                                <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
                                    <p>
                                        <label for="name" className="bg-white text-gray-600 px-1">Name *</label>
                                    </p>
                                </div>
                                <p>
                                    <input id="name" ref={nameRef} autocomplete="false" type="text" className="py-1 px-1 text-gray-900 outline-none block h-full w-full" required />
                                </p>
                            </div>
                            <div className="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
                                <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
                                    <p>
                                        <label for="Price" className="bg-white text-gray-600 px-1">Price *</label>
                                    </p>
                                </div>
                                <p>
                                    <input id="Price" ref={priceRef} autocomplete="false" type="number" className="py-1 px-1 outline-none block h-full w-full" required />
                                </p>
                            </div>
                            <div className="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
                                <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
                                    <p>
                                        <label for="image" className="bg-white text-gray-600 px-1">image  Url *</label>
                                    </p>
                                </div>
                                <p>
                                    <input id="image" ref={imgRef} autocomplete="false" type="text" className="py-1 px-1 outline-none block h-full w-full" required />
                                </p>
                            </div>
                            <textarea name="About" ref={detlilsRef} cols="5" rows="5" placeholder="About Event" className="border-2" required></textarea>
                        </div>
                        <div className="border-t mt-6 pt-3">
                            <button type="submit" className="rounded text-gray-100 px-3 py-1 bg-blue-500 hover:shadow-inner hover:bg-blue-700 transition-all duration-300">
                                Add Now
                            </button>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default EventAdd;