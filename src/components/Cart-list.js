import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CartItem from './Cart-item';

import './CartList.css';

export default class CartList extends Component {
    static propTypes = {
        items: PropTypes.array.isRequired
    };

    render() {
        const list = this.props.items.map(e => (<CartItem key={e.id} item={e} qtd={e.qtd}> </CartItem>));

        return (
            <div className="cart-list">
                {list}
            </div>
        );
    }
}
