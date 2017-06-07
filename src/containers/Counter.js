import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updatePlayerScore } from '../actions';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.addScore = this.addScore.bind(this);
    this.subtractScore = this.subtractScore.bind(this);
  }

  addScore() {
    this.newScoreState = { newScore: this.props.score + 1, id: this.props.id };
    this.props.updatePlayerScore(this.newScoreState);
  }

  subtractScore() {
    this.newScoreState = { newScore: this.props.score - 1, id: this.props.id };
    this.props.updatePlayerScore(this.newScoreState);
  }

  render() {
    return (
      <div>
        <Button
          bsStyle="danger" bsSize="large"
          onClick={this.subtractScore}
        >-</Button>
        <span className="player-score">{this.props.score}</span>
        <Button
          bsStyle="success" bsSize="large"
          onClick={this.addScore}
        >+</Button>
      </div>
    );
  }
}

Counter.propTypes = {
  score: React.PropTypes.number,
}.isRequired;

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updatePlayerScore }, dispatch);
}

export default connect(null, mapDispatchToProps)(Counter);
