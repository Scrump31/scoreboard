import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const Counter = ({ id, score, updateScore }) => {
  const addScore = () => updateScore(score + 1, id);
  const subtractScore = () => updateScore(score - 1, id);

  return (
    <div>
      <Button bsStyle="danger" bsSize="large" onClick={subtractScore}>
        -
      </Button>
      <span className="player-score">{score}</span>
      <Button bsStyle="success" bsSize="large" onClick={addScore}>
        +
      </Button>
    </div>
  );
};

Counter.propTypes = {
  id: PropTypes.number,
  score: PropTypes.number,
  updateScore: PropTypes.func.isRequired,
}.isRequired;

export default Counter;
