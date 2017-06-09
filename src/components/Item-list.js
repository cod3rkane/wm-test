import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

import './ItemList.css';

export default class ItemList extends Component {
    static propTypes = {
        items: PropTypes.array.isRequired,
        addMethod: PropTypes.func.isRequired
    };

    render() {
        const { addMethod } = this.props;
        const list = this.props.items.map(e => (<Item key={e.id} item={e} clickCart={addMethod}> </Item>));

        return (
            <div className="item-list">
                {list}
            </div>
        );
    }
}
