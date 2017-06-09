import React from 'react';
import PropTypes from 'prop-types';

import './CartItem.css';

const CartItem = ({item, id, onClickRemove}) => {
    const { title, image } = item;
    
    function onRemove() {
        onClickRemove(item, id);
    }
    
    return (
        <div className="cart-item">
            <div>
                <figure>
                    <img src={image} alt={title}/>
                </figure>
            </div>
            <div>
                <a href="">
                    {title.substr(0, 40)}...
                </a>
                <span>Quantidade: 1</span>
            </div>
            <span className="close" onClick={onRemove.bind(this)}>x</span>
        </div>
    );
};

CartItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        sku: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        brand: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        listPrice: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
        rating: PropTypes.number,
        installments: PropTypes.array.isRequired
    }).isRequired,
    id: PropTypes.number.isRequired,
    onClickRemove: PropTypes.func.isRequired
};

export default CartItem;
