import React from 'react';
import { Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Counter from '../containers/Counter';

const Player = ({ removePlayer, name, score, id }) => (
  <div>
    <Col md={6} className="player-name">
      <div onClick={() => removePlayer(id)}>
        {name}
        <span className="deletePlayer glyphicon glyphicon-remove" />
      </div>
    </Col>
    <Col md={6} className="player-counter">
      <Counter id={id} score={score} />
    </Col>
    <Col md={12} className="horizonal-rule" />
  </div>
);

Player.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.number,
}.isRequired;

export default Player;

// TODO: change onClick div to a button tag
