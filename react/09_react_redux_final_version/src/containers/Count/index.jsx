import React, { Component } from 'react'
// import action
import {
    increment,
    decrement,
    incrementAsync
} from '../../redux/actions/count'

import {connect} from 'react-redux'

class Count extends Component {
    state = {carName: 'benzc63'}

    // add
    increment = () => {
        const {value} = this.selectNumber
        this.props.increment(value * 1)
    }
    // substract
    decrement = () => {
        const {value} = this.selectNumber
        this.props.decrement(value * 1)
    }
    incrementIfOdd = () => {
        const {value} = this.selectNumber
        if (this.props.count % 2 !== 0) {
            this.props.increment(value * 1)
        }
    }
    incrementAsync = () => {
        const {value} = this.selectNumber
        this.props.incrementAsync(value * 1, 500)
    }

    render() {
        return (
            <div>
                <h2>I'm counting component, the total population is: {this.props.renshu}</h2>
                <h4>Current Sum is: {this.props.count}</h4>
                <select ref={c => this.selectNumber = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.incrementIfOdd}>Add if the current sum is odd</button>&nbsp;
                <button onClick={this.incrementAsync}>Add Asynchronously</button>
            </div>
        )
    }
}

// use connect()() to create and expose it
export default connect(
    state => ({
        count: state.count,
        personCount: state.persons.length
    }),
    {increment, decrement, incrementAsync}
)(Count)