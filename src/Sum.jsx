import React from 'react';

export default class Sum extends React.Component {
    constructor(props) {
        super(props);
    }

    getSum() {
        return this.props.arr.reduce((a, b) => a + b, 0);
    }

    render() {
        return (
            <>
            <h3>Sum: {this.getSum()}</h3>
            </>
        );
    }
}