import React from 'react';

const MangEv = (props) => {
    const { name, img, price, _id } = props.item;
    const handelDeleteUser = id => {
        const uri = `https://ghoulish-wizard-13656.herokuapp.com/booking${id}`;
        fetch(uri, {
            method: 'DELETE',

        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 1) {
                    alert('delete successfully')
                }
                console.log(data);
            })
    }
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
                            <button class="text-center rounded-lg p-3 m-3 text-white bg-green-400 font-bold text-lg">U</button>
                            <button onClick={() => handelDeleteUser(_id)} class="text-center rounded-lg p-3 text-white bg-red-400 font-bold text-lg">X</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MangEv;