import React from 'react';
import Dice from './Dice';
import Sum from './Sum';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            values: [],
        }
    }

    addDice() {
        let add = this.state.values.concat(0);
        this.setState({
            values: add
        })
    }

    removeDice() {
        if (this.state.values.length > 0) {
            let remove = this.state.values;
            remove.pop();
            this.setState({
                values: remove
            })
        }
    }

    rollDice() {
        let arr = [];
        for (let i = 0; i < this.state.values.length; i++) {
            arr.push(Math.floor(Math.random() * 6) + 1);
        }
        this.setState({
            values: arr
        })
    }

    render() {
        return (
            <>
                <h1>Dice Roller</h1>
                <button onClick={() => this.addDice()}>Add</button>
                <button onClick={() => this.removeDice()}>Remove</button>
                <br/><br/>
                {
                    this.state.values.map((value) => <Dice value={value} click={() => this.rollDice()}></Dice>)
                }
                <Sum arr={this.state.values} />
            </>
        );
    }

}