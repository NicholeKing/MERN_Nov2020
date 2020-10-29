import React, { Component } from 'react';

class CardCompon extends Component {
    render() {
        return (
            <div>
                <h3>Name: { this.props.cardName }</h3>
                <h4>Health: { this.props.health }</h4>
                <h4>Hidden Ability: { this.props.hb }</h4>
                <ul>
                    { this.props.weapons.map((weapon) => <li>{weapon}</li>) }
                </ul>
                <hr/>
            </div>
        );
    }
}

export default CardCompon;