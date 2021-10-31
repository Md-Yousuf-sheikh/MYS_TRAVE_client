import React, { useEffect, useState } from 'react';
import Dropdown from './Dropdown';
import Navbar from './Navbar';

const Header = () => {
    // Toggle menu start
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    };
    useEffect(() => {
        const hideMenu = () => {
            if (window.innerWidth > 768 && isOpen) {
                setIsOpen(false);
            }
        };

        window.addEventListener('resize', hideMenu);

        return () => {
            window.removeEventListener('resize', hideMenu);
        };
    });
    // Toggle Menu End



    return (
        <div>
            <Navbar toggle={toggle} />
            <Dropdown isOpen={isOpen} toggle={toggle} />
        </div>
    );
};

export default Header;