import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/navbarLogo/LogoSite.png';
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="px-4 mt-12 divide-y dark:bg-gray-800 dark:text-gray-100">
            <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
                <div className="lg:w-1/3">
                    <div rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 lg:justify-start">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full dark:bg-gray-300">
                            <img src={logo} alt="" />
                        </div>
                        <span className="self-center text-2xl font-semibold uppercase">Graphics Bari</span>
                    </div>
                </div>
                <div className="grid grid-cols-2 text-sm gap-x-10 gap-y-8 w-full lg:w-2/3 sm:grid-cols-3">
                    <div className="space-y-3">
                        <h3 className="tracking-wide uppercase dark:text-gray-50">Product</h3>
                        <ul className="space-y-1">
                            <li>
                                <Link rel="noopener noreferrer" to="/courses">Services</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="tracking-wide uppercase dark:text-gray-50">Company</h3>
                        <ul className="space-y-1">
                            <li>
                                <Link
                                    to="/"
                                    rel="noopener noreferrer"
                                    className='cursor-pointer'
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/"
                                    rel="noopener noreferrer"
                                    className='cursor-pointer'
                                >
                                    Blog
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <div className="uppercase dark:text-gray-50">Social media</div>
                        <div className="flex justify-start -ml-1 space-x-3">
                            <Link rel="noopener noreferrer" href="#" title="Facebook" className="flex items-center p-1">
                                <FaFacebook className='text-blue-400 h-6 w-6'></FaFacebook>
                            </Link>
                            <Link rel="noopener noreferrer" href="#" title="Twitter" className="flex items-center p-1">
                                <FaTwitter className='text-sky-700 h-6 w-6'></FaTwitter>
                            </Link>
                            <Link rel="noopener noreferrer" href="#" title="Instagram" className="flex items-center p-1">
                                <FaInstagram className='text-pink-500 h-6 w-6'></FaInstagram>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-6 text-sm text-center dark:text-gray-400">© 2022 Graphics Bari. All rights reserved.</div>
        </footer>
    );
};

export default Footer;