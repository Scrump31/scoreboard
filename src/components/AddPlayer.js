import React, { Component } from 'react';
import _ from 'lodash';
import { Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Field, reduxForm } from 'redux-form';
import { reset } from 'redux-form';
import { addNewPlayer } from '../actions';

class AddPlayer extends Component {

  renderPlayerNameField(field) {
    const { meta: { invalid, error, touched } } = field;
    return (
      <div className="form-group">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Add a new player..."
            {...field.input}
          />
          <span className="input-group-btn">
            <button
              className="btn btn-default"
              type="submit"
            >Add
          </button>
          </span>
        </div>
        <div className="playerValidate">
          { touched && invalid ? error : '' }
        </div>
      </div>
    );
  }

  createNewPlayer(values) {
    const { dispatch } = this.props;
    this.props.addNewPlayer(
      {
        name: values.playerName,
        score: 0,
        id: _.uniqueId(),
      },
    );
    return dispatch(reset('AddPlayerForm'));
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <Col md={12}>
        <form onSubmit={handleSubmit(this.createNewPlayer.bind(this))}>
          <Field
            name="playerName"
            component={this.renderPlayerNameField}
          />
        </form>
      </Col>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addNewPlayer }, dispatch);
}

function validate(values) {
  const errors = {};

  if (!values.playerName) {
    errors.playerName = 'Please Enter A Player Name';
  }

  return errors;
}

export default reduxForm({
  validate,
  form: 'AddPlayerForm',
})(
  connect(null, mapDispatchToProps)(AddPlayer),
);
