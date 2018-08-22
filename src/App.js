import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Stats from './containers/Stats';
import PlayerList from './containers/PlayerList';
import Timer from './components/Timer';
import AddPlayer from './containers/AddPlayer';
import './App.css';

const App = () => (
  <Grid className="scoreboard-app">
    <Row>
      <Col md={4} className="text-left stats">
        <Stats />
      </Col>
      <Col md={4} className="scoreboard-title">
        Scoreboard
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
        <PlayerList />
      </ReactCSSTransitionGroup>
    </Row>

    <Row>
      <AddPlayer />
    </Row>
  </Grid>
);

export default App;
