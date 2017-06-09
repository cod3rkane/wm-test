import React from 'react'
import PropTypes from 'prop-types'
import Cart from '../containers/Cart';

import './Header.css';

const Header = () => {
    return (
        <nav className="header">
            <div className="logo">
                <a href=""></a>
            </div>
            <div>
                <Cart></Cart>
            </div>
        </nav>
    )
};

Header.propTypes = {};

export default Header;
