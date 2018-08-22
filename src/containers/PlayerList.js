import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removePlayer } from '../actions';

import Player from '../components/Player';

const PlayerList = ({ players, deletePlayer }) => (
  <div>
    {players.map(player => (
      <Player
        name={player.name}
        score={player.score}
        key={player.id}
        id={player.id}
        removePlayer={deletePlayer}
      />
    ))}
  </div>
);
const mapDispatchToProps = dispatch => ({
  deletePlayer: id => dispatch(removePlayer(id)),
});

const mapStateToProps = ({ players }) => ({ players });

PlayerList.propTypes = {
  players: PropTypes.arrayOf(PropTypes.object).isRequired,
  deletePlayer: PropTypes.func.isRequired,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PlayerList);
