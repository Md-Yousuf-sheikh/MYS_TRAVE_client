import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const Navbar = ({ toggle }) => {
    const { user, LogOut } = useAuth();
    return (
        <nav className="flex container mx-auto px-4 justify-between items-center h-16 bg-white text-black relative shadow-sm " role='navigation' >
            <Link to="/" className=" font-bold text-red-300 text-1xl md:text-2xl flex  ">
                <svg className="w-6 mt-1 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> MT
            </Link>
            {/* Toggle icon svg */}
            <div className="px-4 cursor-pointer  md:hidden">
                <svg onClick={toggle} className="w-6 shadow h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </div>
            <div className="pr-8 md:block hidden">
                <Link className="p-4 hover:text-blue-500" to="/">
                    Home
                </Link>
                {user.email &&
                    <Link className="p-4 hover:text-blue-500" to="/events">
                        Events
                    </Link>
                }
                {user.email &&
                    <Link className="p-4 hover:text-blue-500" to="/eventAdd">
                        Event Add
                    </Link>
                }
                {user.email &&
                    <Link className="p-4 hover:text-blue-500" to="/manage">
                        Event Manage
                    </Link>
                }
                {user.email &&
                    <Link className="p-4 hover:text-blue-500" to="/bookingEvent">
                        Booking Event
                    </Link>
                }
                <Link className="p-4 hover:text-blue-500" to="/about">
                    About
                </Link>
                <Link className="p-4 hover:text-blue-500" to="/contact">
                    Contact
                </Link>
                <h2 className="sm:hidden lg:inline-block inline-block font-medium  text-blue-400">
                    {user.displayName}
                </h2>
                <span className="mx-2">
                    {
                        user?.photoURL && <img className=" mr-5 sm:hidden md:inline-block inline-block ml-2 w-10 h-10 rounded-full" src={user.photoURL} alt="" />
                    }
                    {
                        user.email ? <Link to="/" onClick={LogOut} className=" inline-block mx-2"><svg className="text-blue-400 items-center inline-block w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" strokeLinejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg></Link>
                            : <Link to="/login" className="mx-2 z-2 px-2 py-1 text-white rounded bg-yellow-400 hover:shadow-lg hover:bg-blue-300 ">LogIn</Link>
                    }
                </span>
            </div>
        </nav>
    );
};

export default Navbar;