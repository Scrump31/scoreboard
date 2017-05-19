import React, { Component } from 'react';

import { Col } from 'react-bootstrap';

export default class AddPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = { newPlayerName: '' };
    this.addNewPlayer = this.addNewPlayer.bind(this);
  }

  addNewPlayer(event) {
    event.preventDefault();
    console.log(this.state.newPlayerName);
  }

  render() {
    return (
      <Col md={12}>
        <form>
          <div className="form-group">
            <div className="input-group">
              <input
                value={this.state.newPlayerName}
                onChange={event => this.setState({ newPlayerName: event.target.value })}
                type="text" className="form-control"
                placeholder="Add a new player..."
              />
              <span className="input-group-btn">
                <button
                  className="btn btn-default"
                  type="submit" onClick={this.addNewPlayer}
                >Add
                </button>
              </span>
            </div>
          </div>
        </form>
      </Col>
    );
  }

}

// Player.propTypes = {
//   name: React.PropTypes.string.isRequired,
//   score: React.PropTypes.number,
// }.isRequired;
