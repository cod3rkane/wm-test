import React from 'react';
import PropTypes from 'prop-types';

import './Item.css';

const Item = ({item, clickCart}) => {
    const { title, image, listPrice, price, installments, brand, currency } = item;
    const im = installments[installments.length - 1];
    
    function onClickCart() {
        clickCart(item);
    }

    return (
        <div className="card-item">
            <div className="card">
                <div className="card-content">
                    <div className="card-header">
                        <a href="">
                            <span>{title.substr(0, 73)}...</span>
                        </a>
                    </div>
                    <figure>
                        <img src={image} alt={title}/>
                    </figure>
                    <div className="start-rating">
                        <span></span>
                    </div>
                </div>
                <section className="card-footer">
                    <a href="">
                        <p>
                            <span className="price-old">{currency} {listPrice}</span>
                            <span className="price-curr">{currency} {price}</span>
                            <span className="installment">
                            {im.installmentAmount}x de {im.currency} {im.valuePerInstallment}
                        </span>
                        </p>
                    </a>
                    <div className="card-action" onClick={onClickCart.bind(this)}>
                        <span> </span>
                    </div>
                </section>
            </div>
            <div className="card-brand">
                <a href="">+ {brand}</a>
            </div>
        </div>
    );
};

Item.propTypes = {
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
    clickCart: PropTypes.func.isRequired
};

export default Item;
