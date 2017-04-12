// import React, { Component } from 'react';
import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Stats from './components/Stats';
import Timer from './components/Timer';
import Player from './components/Player';

import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { players: this.props.initialPlayers, score: 0 };
  }
  // getInitialState() {
  //
  // }

  render() {
    return (
      <Grid className="scoreboard-app">
        <Row>
          <Col md={4} className="text-left stats">
            <Stats
              totalPlayers={this.state.players.length}
              totalPoints={0}
            />
          </Col>
          <Col md={5} className="scoreboard-title">
            {this.props.scoreboard}
          </Col>
          <Col md={3} className="text-right timer"><Timer /></Col>
        </Row>

        <Row className="players-container">
          {this.state.players.map(player =>
            <Player
              name={player.name}
              score={player.score}
              key={player.id}
            />)}
        </Row>
      </Grid>
    );
  }

}
App.propTypes = {
  scoreboard: React.PropTypes.string,
  initialPlayers: React.PropTypes.arrayOf(React.PropTypes.shape({
    name: React.PropTypes.string,
    score: React.PropTypes.number,
  })).isRequired,
};
App.defaultProps = {
  scoreboard: 'Scoreboard',
};
