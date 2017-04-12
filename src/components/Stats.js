import React from 'react';

import { Table } from 'react-bootstrap';

export default function Stats(props) {
  return (
    <Table className="stats">
      <tbody>
        <tr className="total-players-td-row">
          <td><strong>Players:</strong></td>
          <td>{props.totalPlayers}</td>
        </tr>
        <tr>
          <td><strong>Total Points:</strong></td>
          <td>{props.totalPoints}</td>
        </tr>
      </tbody>
    </Table>
  );
}
Stats.propTypes = {
  totalPlayers: React.PropTypes.number,
  totalPoints: React.PropTypes.number,
};
Stats.defaultProps = {
  totalPlayers: 0,
  totalPoints: 0,
};
