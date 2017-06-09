import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

export default class ItemList extends Component {
    static propTypes = {
        items: PropTypes.array.isRequired
    };

    render() {
        const list = this.props.items.map(e => (<Item key={e.id} item={e}> </Item>));

        return (
            <div className="item-list">
                {list}
            </div>
        );
    }
}