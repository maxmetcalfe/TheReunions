import React from 'react';
import PropTypes from 'prop-types';

function App(props) {
  console.log(props);
  return (
    <table id="member-table">
      <tbody>
        {props.members.map((item)=>{
           return(
             <tr>item</tr>
           );
        })}
      </tbody>
    </table>
  );
};

App.propTypes = {
  members: PropTypes.string,
};

export default App;
