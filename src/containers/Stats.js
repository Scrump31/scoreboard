import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Table } from 'react-bootstrap';

const Stats = ({ totalPlayers, totalPoints }) => (
  <Table className="stats">
    <tbody>
      <tr className="total-players-td-row">
        <td>
          <strong>Players:</strong>
        </td>
        <td>{totalPlayers}</td>
      </tr>
      <tr>
        <td>
          <strong>Total Points:</strong>
        </td>
        <td>{totalPoints}</td>
      </tr>
    </tbody>
  </Table>
);

Stats.propTypes = {
  totalPlayers: React.PropTypes.number,
  totalPoints: React.PropTypes.number,
};
Stats.defaultProps = {
  totalPlayers: 0,
  totalPoints: 0,
};

const mapStateToProps = ({ players }) => ({ players });

export default connect(mapStateToProps)(Stats);
