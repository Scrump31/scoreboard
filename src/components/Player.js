import React from 'react';
import { Col } from 'react-bootstrap';
import Counter from './Counter';

export default function Player(props) {
  return (
    <div>
      <Col md={6} className="player-name"><div>{props.name}</div></Col>
      <Col md={6} className="player-counter">
        <Counter score={props.score} />
      </Col>
      <Col md={12} className="horizonal-rule" />
    </div>
  );
}
Player.propTypes = {
  name: React.PropTypes.string.isRequired,
  score: React.PropTypes.number,
}.isRequired;
