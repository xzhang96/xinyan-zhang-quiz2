import React from 'react';

export default class Dice extends React.Component {

    render() {
        return (
            <div className="dice" onClick={() => this.props.click()}>
                {this.props.value}
                
            </div>
        );
    }

}