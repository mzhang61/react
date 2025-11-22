import React, { Component } from 'react';

import {
    createIncrementAction,
    createDecrementAction,
    createIncrementAsyncAction
} from '../../redux/actions/count'
import { connect } from 'react-redux'

class Count extends Component {
    state = {carName: 'Toyota'}

    increment = () => {
        const {value} = this.selectNumber
        this.props.jia(value*1)
    }

    decrement = () => {
        const {value} = this.selectNumber
        this.props.jian(value*1)
    }

    incrementIfOdd = () => {
        const {value} = this.selectNumber
        if(this.props.count % 2 !== 0) {
            this.props.jia(value*1)
        }
    }
    incrementAsync = () => {
        const {value} = this.selectNumber
        this.props.jiaAsync(value*1, 500)
    }

    render() {
        return (
            <div>
                <h2>population sum is: {this.props.renshu}</h2>
                <h4>current sum: {this.props.count}</h4>
                <select ref={c => this.selectNumber = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;
                 <button onClick={this.increment}>+</button>&nbsp;
                 <button onClick={this.decrement}>-</button>&nbsp;
                 <button onClick={this.incrementIfOdd}>increment if the current sum is odd</button>&nbsp;
                 <button onClick={this.incrementAsync}>add asynchronizedly</button>
            </div>

        )
    }
}

export default connect(
    state => ({
        count: state.he,
        renshu: state.rens.length
    }),
    {
        jia: createIncrementAction,
        jian: createDecrementAction,
        jiaAsync: createIncrementAsyncAction,
    }
)(Count)