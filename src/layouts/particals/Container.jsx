import React, { Component, PropTypes } from 'react';
import {Breadcrumb} from 'antd';

import Form from '../../components/form';
import Table from '../../components/table';

const Part_container = ({children}) => {
    return (
      <div className="layout-container">
        <div className="con-breadcrumb">
          <Breadcrumb>
            <Breadcrumb.Item>首页</Breadcrumb.Item>
            <Breadcrumb.Item>应用列表</Breadcrumb.Item>
            <Breadcrumb.Item>某应用</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="con-body">
          <div className="bd-header">
            <Form />
          </div>
          <div className="bd-content">
            <Table />
          </div>
        </div>
      </div>
    );
};
Part_container.PropTypes = {
};

export default Part_container;
