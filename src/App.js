import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Stats from './containers/Stats';
import PlayerList from './containers/PlayerList';
import Timer from './components/Timer';
import AddPlayer from './containers/AddPlayer';
import './App.css';

const App = () => (
  <Grid className="scoreboard-app">
    <Row>
      <Col xs={6} sm={4} className="text-left stats">
        <Stats />
      </Col>
      <Col xs={6} sm={4} className="scoreboard-title">
        Scoreboard
      </Col>
      <Col xs={12} sm={4} className="text-center timer">
        <Timer />
      </Col>
    </Row>

    <Row className="players-container">
      <Col xs={12}>
        <PlayerList />
      </Col>
    </Row>

    <Row>
      <Col xs={12}>
        <AddPlayer />
      </Col>
    </Row>
  </Grid>
);

export default App;
