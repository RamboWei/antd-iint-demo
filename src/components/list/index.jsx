import React, {Component, PropTypes} from 'react';

import Form from './form'
import Table from './Table'

const _List = ({children}) => {
  return (
    <div className="con-body">
      <div className="bd-header">
        <Form/>
      </div>
      <div className="bd-content">
        <Table/>
      </div>
    </div>
  );
};
_List.PropTypes = {};

export default _List;
