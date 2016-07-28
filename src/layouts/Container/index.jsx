import React, { Component, PropTypes } from 'react';
import {Breadcrumb} from 'antd';

import Form from './form';
import Table from './table';

const Layout_container = ({children}) => {
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
Layout_container.PropTypes = {
};

export default Layout_container;
