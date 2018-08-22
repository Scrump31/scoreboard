import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import _ from 'lodash';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Stats from './components/Stats';
import Player from './containers/Player';
import Timer from './components/Timer';
import AddPlayer from './containers/AddPlayer';
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
          <Col md={4} className="scoreboard-title">
            {this.props.scoreboard}
          </Col>

          <Col md={4} className="text-center timer">
            <Timer />
          </Col>

        </Row>
        <Row className="players-container">
          <ReactCSSTransitionGroup
            transitionName={'fade'}
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
          >

            {this.props.players.map(player =>
              (<Player
                name={player.name}
                score={player.score}
                key={player.id}
                id={player.id}
              />),
            )}
          </ReactCSSTransitionGroup>

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
