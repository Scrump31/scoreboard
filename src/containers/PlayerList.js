import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { removePlayer, updatePlayerScore } from '../actions';

import Player from '../components/Player';

export const PlayerList = ({ players, deletePlayer, updateScore }) => (
  <TransitionGroup>
    {players.map(player => (
      <CSSTransition key={player.id} timeout={500} classNames="fade">
        <Player
          name={player.name}
          score={player.score}
          key={player.id}
          id={player.id}
          deletePlayer={deletePlayer}
          updateScore={updateScore}
        />
      </CSSTransition>
    ))}
  </TransitionGroup>
);
const mapDispatchToProps = dispatch => ({
  deletePlayer: id => dispatch(removePlayer(id)),
  updateScore: (newScore, id) => dispatch(updatePlayerScore(newScore, id)),
});

const mapStateToProps = ({ players }) => ({ players });

PlayerList.propTypes = {
  players: PropTypes.arrayOf(PropTypes.object).isRequired,
  deletePlayer: PropTypes.func.isRequired,
  updateScore: PropTypes.func.isRequired,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PlayerList);
