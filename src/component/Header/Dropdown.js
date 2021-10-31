import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const Dropdown = ({ isOpen, toggle }) => {
    const { user, logOut } = useAuth();
    return (
        <div
            className={
                isOpen
                    ? 'grid grid-rows-4 text-center  items-center bg-blue-400'
                    : 'hidden'
            }
            onClick={toggle}
        >
            <h2 className="inline-block text-white font-medium">
                {user.displayName}
            </h2>
            <Link className="p-4 hover:text-white" to="/">
                Home
            </Link>
            <Link className="p-4 hover:text-white" to="/events">
                Events
            </Link>
            <Link className="p-4 hover:text-white" to="/eventAdd">
                Event Add
            </Link>
            <Link className="p-4 hover:text-white" to="/manage">
                Event Manage
            </Link>
            <Link className="p-4 hover:text-white" to="/About">
                About
            </Link>
            <Link className="p-4 hover:text-white" to="/contact">
                Contact
            </Link>
            <span className="mx-2 py-3 ">
                {
                    user.email ? <Link to="/" onClick={logOut} className=" inline-block mx-2"><svg className="text-blue-400 items-center inline-block w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg></Link>
                        : <Link to="/login" className="mx-2 z-2 px-2 py-1 text-white rounded-full bg-blue-600 shadow-lg hover:bg-blue-700 ">LogIn</Link>
                }
            </span>
        </div>
    );
};

export default Dropdown;
