import React, { useRef } from 'react';

const EventAdd = () => {

    const nameRef = useRef();
    const priceRef = useRef();
    const imgRef = useRef();
    const detlilsRef = useRef();


    const handelSubmit = (e) => {
        console.log(nameRef.current.value);
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
                    alert('Successfully Added User!')
                    e.target.reset()
                }
            })

        e.preventDefault();
    }

    return (
        <div className="">
            <h1 className="text-4xl text-center font-medium bg-red-400 text-white ">ADD NEW EVENT</h1>
            <div className="bg-blue-300">
                <form onSubmit={handelSubmit} className=" px-4 md:w-2/3 mx-auto py-5 ">
                    <div class=" bg-white shadow rounded-lg p-6">
                        <div class="grid  gap-6">
                            <div class="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
                                <div class="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
                                    <p>
                                        <label for="name" class="bg-white text-gray-600 px-1">Name *</label>
                                    </p>
                                </div>
                                <p>
                                    <input id="name" ref={nameRef} autocomplete="false" type="text" class="py-1 px-1 text-gray-900 outline-none block h-full w-full" required />
                                </p>
                            </div>
                            <div class="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
                                <div class="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
                                    <p>
                                        <label for="Price" class="bg-white text-gray-600 px-1">Price *</label>
                                    </p>
                                </div>
                                <p>
                                    <input id="Price" ref={priceRef} autocomplete="false" type="number" class="py-1 px-1 outline-none block h-full w-full" required />
                                </p>
                            </div>
                            <div class="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
                                <div class="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
                                    <p>
                                        <label for="image" class="bg-white text-gray-600 px-1">image  Url *</label>
                                    </p>
                                </div>
                                <p>
                                    <input id="image" ref={imgRef} autocomplete="false" type="text" class="py-1 px-1 outline-none block h-full w-full" required />
                                </p>
                            </div>
                            <textarea name="About" ref={detlilsRef} cols="5" rows="5" placeholder="About Event" className="border-2" required></textarea>
                        </div>
                        <div class="border-t mt-6 pt-3">
                            <button type="submit" class="rounded text-gray-100 px-3 py-1 bg-blue-500 hover:shadow-inner hover:bg-blue-700 transition-all duration-300">
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