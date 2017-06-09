import React from 'react'
import PropTypes from 'prop-types'

import './Header.css';

const Header = () => {
    return (
        <nav className="header">
            <div className="logo">
                <a href=""></a>
            </div>
            <div className="cart">
                <a href="">
                    <span className="number">1</span>
                    <span className="cart-icon"></span>
                </a>
            </div>
        </nav>
    )
};

Header.propTypes = {};

export default Header;
