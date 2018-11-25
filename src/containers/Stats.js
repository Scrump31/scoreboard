import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';

const Stats = ({ players }) => (
  <Table className="stats">
    <tbody>
      <tr className="total-players-td-row">
        <td>
          <strong>Players:</strong>
        </td>
        <td id="total_players">{players.length}</td>
      </tr>
      <tr>
        <td>
          <strong>Total Points:</strong>
        </td>
        <td id="total_score">{_.sumBy(players, 'score')}</td>
      </tr>
    </tbody>
  </Table>
);

Stats.propTypes = {
  players: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = ({ players }) => ({ players });

export default connect(mapStateToProps)(Stats);
