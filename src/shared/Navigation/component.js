import React, { useState } from 'react';
// ASSETS
import logoImage from '../../assets/images/logo.png';
import { AiOutlineMenu, AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai'
// ROUTER
import { Link } from 'react-router-dom';

const Navigation = () => {
    //STATE
    const [toggleNav, setToggleNav] = useState(false);

    //EVENT HANDLERS
    const toggleNavHandler = () => setToggleNav(!toggleNav);

    return(
        <nav>
            <Link to='/' className='burgerMenu' onClick={toggleNavHandler}>
                <AiOutlineMenu />
            </Link>
            <Link to='/' id='logo'>
                <img src={logoImage} alt='our logo in green font and transparent background' />
            </Link>
            <ul className={toggleNav ? 'navLinks active' : 'navLinks'}>
                <Link to='/products'>
                    Products
                </Link>
                <Link to='/about'>
                    About
                </Link>
                <Link to='/contact'>
                    Contact
                </Link>
            </ul>

            <ul className='navActions'>
                <Link to='/'>
                    <AiOutlineShoppingCart />
                </Link>
                <Link to='/'>
                    <AiOutlineUser />
                </Link>
            </ul>
        </nav>
    );
}

export default Navigation;