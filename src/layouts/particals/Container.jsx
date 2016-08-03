import React, { Component, PropTypes } from 'react';
import Breadcrumb from '../../components/Breadcrumb';

const Part_container = ({children}) => {
  let data = ['shouye', 'yongyong', 'mou']
    return (
      <div className="layout-container">
        <Breadcrumb data={data}/>
        {children}
      </div>
    );
};
Part_container.PropTypes = {
};

export default Part_container;
