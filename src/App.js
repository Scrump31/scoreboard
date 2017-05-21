import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import _ from 'lodash';
import Stats from './components/Stats';
import Timer from './components/Timer';
import Player from './components/Player';
import AddPlayer from './components/AddPlayer';
import './App.css';

class App extends Component {
  render() {
    return (
      <Grid className="scoreboard-app">
        <Row>
          <Col md={4} className="text-left stats">
            <Stats
              totalPlayers={this.props.players.length}
              totalPoints={_.sumBy(this.props.players, 'score')}
            />
          </Col>
          <Col md={5} className="scoreboard-title">
            {this.props.scoreboard}
          </Col>
          <Col md={3} className="text-right timer"><Timer /></Col>
        </Row>

        <Row className="players-container">
          {this.props.players.map(player =>
            <Player
              name={player.name}
              score={player.score}
              key={player.id}
              id={player.id}
            />)}
        </Row>
        <Row>
          <AddPlayer />
        </Row>
      </Grid>
    );
  }

}
// App.propTypes = {
//   scoreboard: React.PropTypes.string,
//
//   // initialPlayers: React.PropTypes.arrayOf(React.PropTypes.shape({
//   //   name: React.PropTypes.string,
//   //   score: React.PropTypes.number,
//   // })).isRequired,
// };
App.defaultProps = {
  scoreboard: 'Scoreboard',
};

function mapStateToProps(state) {
  return {
    players: state.players,
  };
}

export default connect(mapStateToProps)(App);
