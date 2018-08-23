import React from 'react';
import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Counter from '../components/Counter';

const Player = ({ deletePlayer, updateScore, name, score, id }) => (
  <Row>
    <Col xs={9} className="player-name">
      <div>
        {name}
        <button
          onClick={() => deletePlayer(id)}
          className="glyphicon glyphicon-remove"
        />
      </div>
    </Col>

    <Col xs={3} className="player-counter">
      <Counter id={id} score={score} updateScore={updateScore} />
    </Col>

    <Col md={12} className="horizonal-rule" />
  </Row>
);

Player.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  score: PropTypes.number,
  updateScore: PropTypes.func.isRequired,
  deletePlayer: PropTypes.func.isRequired,
}.isRequired;

export default Player;
