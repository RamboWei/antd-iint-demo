import React, {Component, PropTypes} from 'react';

import Form from './form'

const _List = ({children}) => {
  return (
    <div className="con-body">
      <div className="bd-header">
      </div>
      <div className="bd-content">
        <Form/>
      </div>
    </div>
  );
};
_List.PropTypes = {};

export default _List;
