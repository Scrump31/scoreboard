import React from 'react';
import { Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Counter from '../containers/Counter';

const Player = ({ removePlayer, name, score, id }) => (
  <div>
    <Col md={6} className="player-name">
      <div>
        {name}
        <button
          onClick={() => removePlayer(id)}
          className="glyphicon glyphicon-remove"
        />
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
