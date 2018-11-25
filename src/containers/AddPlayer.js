import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup, Button } from 'react-bootstrap';

import _ from 'lodash';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNewPlayer } from '../actions';

export class AddPlayer extends Component {
  state = {
    value: '',
  };

  handleChange = e => this.setState({ value: e.target.value });

  generatePlayer = () => {
    this.props.createPlayer({
      id: _.uniqueId(),
      name: this.state.value,
      score: 0,
    });
    this.setState({ value: '' });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.value) {
      this.generatePlayer();
    } else {
      return null;
    }
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <FormGroup>
          <InputGroup>
            <FormControl
              type="text"
              value={this.state.value}
              placeholder="Add a new player..."
              onChange={this.handleChange}
            />
            <InputGroup.Button>
              <Button type="submit">Add</Button>
            </InputGroup.Button>
          </InputGroup>
        </FormGroup>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createPlayer: player => dispatch(addNewPlayer(player)),
});

AddPlayer.propTypes = {
  createPlayer: PropTypes.func.isRequired,
};

export default connect(
  null,
  mapDispatchToProps,
)(AddPlayer);
