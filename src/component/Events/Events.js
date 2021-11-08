import React, { useEffect, useState } from 'react';
import Event from './Event';

const Events = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/events')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    return (
        <div className="py-5 px-4">
            <div className="grid sm:grid-cols-2 py-7 lg:grid-cols-3 xl:grid-cols-4 pt-3">
                {
                    items.map(item => <Event key={item._id} item={item} />)
                }
            </div>
        </div>
    );
};

export default Events;