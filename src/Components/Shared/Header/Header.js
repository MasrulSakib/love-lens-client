import React from 'react';
import logo from '../../../Assets/NavImg/logo(1).png'
import './Header.css'
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div className='relative'>
            <div className="navbar z-10 bg-transparent text-red-400">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-none rounded-box w-52">

                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/services'>Services</Link></li>
                            <li><Link to='/blog'>Blog</Link></li>
                            <li><Link to='/register'>Sign Up</Link></li>
                            <li><Link to='/login'>Login</Link></li>
                        </ul>
                    </div>
                    <img src={logo} width={240} alt="" />

                </div>
                <div className="navbar-center justify-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">

                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/services'>Services</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                        <li><Link to='/register'>Sign Up</Link></li>
                        <li><Link to='/login'>Login</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a href="/" className="btn btn-outline btn-error">Get in touch</a>
                </div>
            </div>
        </div>
    );
};

export default Header;