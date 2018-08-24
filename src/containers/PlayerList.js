import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { removePlayer, updatePlayerScore } from '../actions';

import Player from '../components/Player';

const PlayerList = ({ players, deletePlayer, updateScore }) => (
  <div>
    <ReactCSSTransitionGroup
      transitionName={'fade'}
      transitionEnterTimeout={500}
      transitionLeaveTimeout={500}
    >
      {players.map(player => (
        <Player
          name={player.name}
          score={player.score}
          key={player.id}
          id={player.id}
          deletePlayer={deletePlayer}
          updateScore={updateScore}
        />
      ))}
    </ReactCSSTransitionGroup>
  </div>
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
