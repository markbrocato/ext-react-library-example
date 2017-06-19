import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Column } from '@extjs/ext-react';
import data from './data';
import renderWhenReady from './renderWhenReady';

class StocksGrid extends Component {

    static propTypes = {
        height: PropTypes.number,
        width: PropTypes.number,
        title: PropTypes.string
    }

    store = new Ext.data.Store({
        data
    })

    render() {
        const { height, width, title } = this.props;

        return (
            <Grid store={this.store} height={height} width={width} title={title} shadow>
                <Column dataIndex="name" flex={1} text="Company Name"/>
                <Column dataIndex="symbol" flex={1} text="Ticker Symbol"/>
            </Grid>
        )
    }

}

export default renderWhenReady(StocksGrid);