import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { resetErrorMessage } from '../actions';

import './Cart.css';

class Cart extends Component {
    static propTypes = {
        // Injected by React Router
        children: PropTypes.node
    }

    render() {
        return (
            <div className="cart">
                <a href="">
                    <span className="number">1</span>
                    <span className="cart-icon"></span>
                </a>
                <div className="container">
                    <div className="cart-main">
                        <h2>Meu carrinho (0 item)</h2>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({})

export default connect(mapStateToProps, {
    resetErrorMessage
})(Cart)
