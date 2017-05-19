import React, { Component } from 'react';
import _ from 'lodash';
import { Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addNewPlayer } from '../actions';

class AddPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = { newPlayerName: '' };
    this.createNewPlayer = this.createNewPlayer.bind(this);
  }

  createNewPlayer(event) {
    event.preventDefault();
    this.props.addNewPlayer(
      {
        name: this.state.newPlayerName,
        score: 0,
        id: _.uniqueId(),
      },
    );

    this.setState({ newPlayerName: '' });
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
                  type="submit" onClick={this.createNewPlayer}
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

function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, result should be passed to all reducers
  return bindActionCreators({ addNewPlayer }, dispatch);
}

/* Promote BookList from a component to a container - it needs to know
 about this new dispatch method, selectBook. Make it avaliable as a prop */
export default connect(null, mapDispatchToProps)(AddPlayer);
