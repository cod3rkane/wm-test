import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CartItem from './Cart-item';

// import './CartList.css';

export default class CartList extends Component {
    static propTypes = {
        items: PropTypes.array.isRequired,
        removeAction: PropTypes.func.isRequired
    };

    render() {
        const { removeAction } = this.props;
        const list = this.props.items.map((e, i) => (<CartItem key={i} item={e} id={i} onClickRemove={removeAction}> </CartItem>));

        return (
            <div className="cart-list">
                {list}
            </div>
        );
    }
}
