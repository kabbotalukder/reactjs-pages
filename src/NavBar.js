import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import './global.css';

const Navbar = () => {
    return(
        <nav className='NavBar'>
            <ul>
                <li className='list text-white text-center'>
                    <Link className='link' to='/'>Home</Link>
                </li>
            </ul>
            <ul> 
                <li className='list text-white text-center'>
                    <Link className='link' to='/about'>About</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;