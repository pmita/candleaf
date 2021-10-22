import React from 'react';
// ROUTER
import { Link } from 'react-router-dom';
// ASSETS
import footerLogo from '../../assets/images/logoB&W.png';

const Footer = () => {
    return(
        <footer>
            <ul className='footerBrand'>
                <img src={footerLogo} alt='our brand logo in white with black background' />
                <h4>
                    Your natural candle made for
                    your home and for your wellness.
                </h4>
            </ul>
            <ul className='footerLinks'>
                <h4>Discovery</h4>
                <Link to='/'>
                    New season
                </Link>
                <Link to='/'>
                    Most searched
                </Link>
                <Link to='/'>
                    Most selled
                </Link>
            </ul>
            <ul className='footerLinks'>
                <h4>About</h4>
                <Link to='/'>
                    Help
                </Link>
                <Link to='/'>
                    Shipping
                </Link>
                <Link to='/'>
                    Affiliate
                </Link>
            </ul>
            <ul className='footerLinks'>
                <h4>Info</h4>
                <Link to='/'>
                    Contact us
                </Link>
                <Link to='/'>
                    Privacy Policies
                </Link>
                <Link to='/'>
                    Term and Conditions
                </Link>
            </ul>
        </footer>
    );
}

export default Footer;