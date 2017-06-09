import React from 'react';
import PropTypes from 'prop-types';

const CartItem = ({item, qtd}) => {
    const { title, image } = item;

    return (
        <div className="cart-item">
            <div>
                <figure>
                    <img src={image} alt={title}/>
                </figure>
            </div>
            <div>
                <a href="">
                    {title}
                </a>
                <span>Quantidade: {qtd}</span>
            </div>
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
    qtd: PropTypes.number.isRequired
};

export default CartItem;
