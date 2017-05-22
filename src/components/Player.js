import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removePlayer } from '../actions';
import Counter from './Counter';

class Player extends Component {
  constructor(props) {
    super(props);
    this.deletePlayer = this.deletePlayer.bind(this);
  }

  deletePlayer() {
    this.props.removePlayer(this.props.id);
  }

  render() {
    return (
      <div>
        <Col md={6} className="player-name">
          <div onClick={this.deletePlayer}>{this.props.name}
            <span className="deletePlayer glyphicon glyphicon-remove" />
          </div>
        </Col>
        <Col md={6} className="player-counter">
          <Counter id={this.props.id} score={this.props.score} />
        </Col>
        <Col md={12} className="horizonal-rule" />
      </div>
    );
  }
}

Player.propTypes = {
  name: React.PropTypes.string.isRequired,
  score: React.PropTypes.number,
}.isRequired;

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ removePlayer }, dispatch);
}

export default connect(null, mapDispatchToProps)(Player);
