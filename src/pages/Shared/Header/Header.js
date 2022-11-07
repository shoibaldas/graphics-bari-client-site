import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/navbarLogo/LogoSite.png';
import { FaUserAlt } from "react-icons/fa";
import { AuthContext } from '../../../context/AuthProvider';

const Header = () => {

    const { user } = useContext(AuthContext);

    const menuItems = <>
        <li className="font-semibold"><Link to='/'>Home</Link></li>
        <li className="font-semibold"><Link to='/'>Services</Link></li>
        <li className="font-semibold"><Link to='/'>About</Link></li>
        <li className="font-semibold"><Link to='/'>Blog</Link></li>
    </>

    return (
        <div className='max-w-screen-lg mx-auto'>
            <div className="navbar p-4 h-24 mb-8 bg-base-100">
                <div className="flex-1">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            {/* 
                             */}
                            <i class="fa-solid fa-bars"></i>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link className="">
                        <img className="w-32 h-20" src={logo} alt="" />
                    </Link>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal p-0">
                            {menuItems}
                        </ul>
                    </div>
                </div>

                <div className="navbar-end">
                    {user?.uid ?
                        <>
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar tooltip tooltip-bottom" data-tip={user?.displayName}>
                                    {
                                        user?.uid ?
                                            <img className='w-10 rounded-full' src={user?.photoURL} alt='' /> :
                                            <FaUserAlt className='bg-violet-800'></FaUserAlt>
                                    }
                                </label>
                                <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                    <li>
                                        <a href='/' className="justify-between">
                                            Profile
                                        </a>
                                    </li>
                                    <li><Link to='/'>My Reviews</Link></li>
                                    <li><Link to='/'>Add Service</Link></li>
                                    <li><Link>Logout</Link></li>
                                </ul>
                            </div>
                        </>
                        :
                        <Link to='/login' className="rounded px-6 py-2 font-semibold bg-violet-600 text-gray-50 hover:bg-violet-700 ease-in duration-200">Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;