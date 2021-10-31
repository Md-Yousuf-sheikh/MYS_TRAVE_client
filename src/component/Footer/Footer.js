import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (

        <footer className="text-gray-600 body-font bg-gray-700">
            <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                    <Link to='/' className="flex text-yellow-400 title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <span className="ml-3 text-xl text-white">MT</span>
                    </Link>
                    <p className="mt-2 text-sm text-white">Land behold it created good saw after she'd Our set living. Signs midst dominion creepeth morning laboris nisi ufsit aliquip.</p>
                </div>
                <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                    <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-bold text-white tracking-widest text-md mb-3">Navigation</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <Link className="text-white hover:text-red-300" >Home</Link>
                            </li>
                            <li>
                                <Link className="text-white hover:text-red-300" >About</Link>
                            </li>
                            <li>
                                <Link className="text-white hover:text-red-300" >Service</Link>
                            </li>
                            <li>
                                <Link className="text-white hover:text-red-300" >Blog</Link>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-bold text-white tracking-widest text-md mb-3">Services</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <p className="text-white hover:text-red-300" >Blackforest</p>
                            </li>
                            <li>
                                <p className="text-white hover:text-red-300" >Bodhubon</p>
                            </li>
                            <li>
                                <p className="text-white hover:text-red-300" >Rongdhonu</p>
                            </li>
                            <li>
                                <p className="text-white hover:text-red-300" >Meghrong</p>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-bold text-white tracking-widest text-md mb-3">Contact Us</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <p className="text-white hover:text-red-300" >76/A, Green Lane, Gopalgonj , Dhaka</p>
                            </li>
                            <li>
                                <p className="text-white hover:text-red-300" >mystravel@gmail.com</p>
                            </li>
                            <li>
                                <p className="text-yellow-400 text-2xl  hover:text-red-300" >+88 0123654789</p>
                            </li>
                        </nav>
                    </div>

                </div>
            </div>
            <div className="bg-gray-900">
                <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                    <p className="text-white text-sm text-center sm:text-left">© 2020 MT —
                        <Link href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-400 ml-1" target="_blank">@MYSTRAVEL</Link>
                    </p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                        <Link className="text-gray-200">
                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                            </svg>
                        </Link>
                        <Link className="ml-3 text-gray-200">
                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                            </svg>
                        </Link>
                        <Link className="ml-3 text-gray-200">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                            </svg>
                        </Link>
                        <Link className="ml-3 text-gray-200">
                            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                <circle cx="4" cy="4" r="2" stroke="none"></circle>
                            </svg>
                        </Link>
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;