import React from 'react';
import PropTypes from 'prop-types';

const types = ["four", "three", "two"];

const TableRow = ({member}) => (
  <tr key={member}>
    <td key={member}>
      <MemberIcon member={member} />
      <CoinBox member={member} />
    </td>
  </tr>
)

const MemberIcon = ({member}) => (
  <div key={member} className="member-icon"></div>
)

const CoinBox = ({member}) => (
  <div key={member} className="coin-box">
    {types.map((type) => (
      <Coin type={type} />
    ))}
  </div>
)

const Coin = ({type}) => (
  <div key={type} className="coin"></div>
)

function MemberTable(props) {
  return (
    <table id="member-table">
      <tbody>
      {props.members.map((member) => (
        <TableRow key={member} member={member} />
      ))}
      </tbody>
    </table>
  );
};

MemberTable.propTypes = {
  members: PropTypes.array,
};

export default MemberTable;
