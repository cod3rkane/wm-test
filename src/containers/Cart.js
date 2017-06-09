import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { removeItemCart } from '../actions';
import CartList from '../components/Cart-list';

import './Cart.css';

class Cart extends Component {
    static propTypes = {
        // Injected by React Router
        children: PropTypes.node,
        removeItemCart: PropTypes.func.isRequired
    }

    render() {
        const { cartItems, removeItemCart } = this.props;
        let strItens = cartItems.length > 1 ? 'itens' : 'item';
        
        return (
            <div className="cart">
                <a href="">
                    <span className="number">{cartItems.length}</span>
                    <span className="cart-icon"></span>
                </a>
                <div className="container">
                    <div className="cart-main">
                        <h2>Meu carrinho ({cartItems.length} {strItens})</h2>
                    </div>
                    <div>
                        <CartList items={cartItems} removeAction={removeItemCart}></CartList>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    cartItems: state.cartReducer
})

export default connect(mapStateToProps, {
    removeItemCart
})(Cart)
