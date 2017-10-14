import React from 'react';
import PropTypes from 'prop-types';

import MemberTable from './MemberTable';

function App(props) {
  return <MemberTable members={props.members}/>
};

App.propTypes = {
  members: PropTypes.array,
};

export default App;
