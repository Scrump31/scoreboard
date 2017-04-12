import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { currentScore: this.props.score };
  }

  render() {
    return (
      <div>
        <Button
          bsStyle="danger" bsSize="large"
          onClick={() => this.setState({ currentScore: this.state.currentScore - 1 })}
        >-</Button>
        <span className="player-score">{this.state.currentScore}</span>
        <Button
          bsStyle="success" bsSize="large"
          onClick={() => this.setState({ currentScore: this.state.currentScore + 1 })}
        >+</Button>
      </div>
    );
  }
}

Counter.propTypes = {
  score: React.PropTypes.number,
}.isRequired;
