import React from 'react';

export default class Dice extends React.Component {

    render() {
        return (
            <div className="dice" onClick={() => this.roll()}>
                {this.props.value}
                
            </div>
        );
    }

    roll() {
        console.log("clicked")
        this.props.click();
    }

}