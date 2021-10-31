import React, { useEffect, useState } from 'react';
import MangEv from './MangEv';

const ManageEvent = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('https://ghoulish-wizard-13656.herokuapp.com/events')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    return (
        <div>
            <div className="py-5 px-4">
                <div className="grid sm:grid-cols-2 py-7 lg:grid-cols-3 xl:grid-cols-4 pt-3">
                    {
                        items.map(item => <MangEv key={item._id} item={item} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default ManageEvent;